import { useCallback, useEffect, useReducer, useRef } from 'react';

import { noticesApi, toApiError } from '@/services/api-services';
import { NoticeMemoryCache } from '@/services/cache/notice-memory-cache';
import { NoticeStorage } from '@/services/storage';
import { createInitialFeedState, feedReducer } from '@/utilities/feedReducer';
import { AppLogger } from '@/utilities/logger';
import type { NoticeFeed } from '@/types/feed';
import type { CategoryFilter } from '@/types/notice';

import { useOnReconnect } from './useNetworkStatus';
import { useRequestSequence } from './useRequestSequence';

export const useNoticeFeed = (category: CategoryFilter): NoticeFeed => {
  const [state, dispatch] = useReducer(feedReducer, category, createInitialFeedState);

  const requestSequence = useRequestSequence();
  const isLoadingMore = useRef(false);

  const fetchFirstPage = useCallback(
    async (request: 'background' | 'pull') => {
      const isLatest = requestSequence.start();
      dispatch({ type: 'refreshStarted', request });
      try {
        const page = await noticesApi.listNotices({ category, page: 1 });
        if (!isLatest()) return;
        NoticeMemoryCache.remember(page.items);
        dispatch({ type: 'refreshSucceeded', page, at: Date.now() });
      } catch (error) {
        if (!isLatest()) return;
        const apiError = toApiError(error);
        AppLogger.warn('useNoticeFeed.fetchFirstPage', { category, kind: apiError.kind });
        dispatch({ type: 'refreshFailed', error: apiError });
      }
    },
    [category, requestSequence],
  );

  useEffect(() => {
    let isActive = true;
    dispatch({ type: 'reset', category });
    NoticeStorage.loadCachedFeed(category).then((cachedFeed) => {
      if (!isActive || !cachedFeed) return;
      NoticeMemoryCache.remember(cachedFeed.items);
      dispatch({ type: 'cacheLoaded', category, ...cachedFeed });
    });
    void fetchFirstPage('background');
    return () => {
      isActive = false;
    };
  }, [category, fetchFirstPage]);

  useEffect(() => {
    if (state.source !== 'network' || state.syncedAt === null) return;
    void NoticeStorage.saveCachedFeed(state.category, {
      items: state.items,
      nextPage: state.nextPage,
      savedAt: state.syncedAt,
    });
  }, [state.source, state.category, state.items, state.nextPage, state.syncedAt]);

  const canPage = state.source === 'network' && state.nextPage !== null && state.inFlight === null;

  const fetchNextPage = useCallback(
    async (isRetry: boolean) => {
      const page = state.nextPage;
      if (!canPage || page === null || isLoadingMore.current) return;
      if (state.loadMoreError && !isRetry) return;

      isLoadingMore.current = true;
      const isLatest = requestSequence.start();
      dispatch({ type: 'loadMoreStarted' });
      try {
        const result = await noticesApi.listNotices({ category, page });
        if (!isLatest()) return;
        NoticeMemoryCache.remember(result.items);
        dispatch({ type: 'loadMoreSucceeded', page: result });
      } catch (error) {
        if (!isLatest()) return;
        const apiError = toApiError(error);
        AppLogger.warn('useNoticeFeed.fetchNextPage', { category, page, kind: apiError.kind });
        dispatch({ type: 'loadMoreFailed', error: apiError });
      } finally {
        isLoadingMore.current = false;
      }
    },
    [canPage, category, requestSequence, state.nextPage, state.loadMoreError],
  );

  const hasItems = state.items.length > 0;
  const isStale = hasItems && (state.source === 'cache' || state.refreshError !== null);

  const isOffline = useOnReconnect(() => {
    if (isStale || state.refreshError) void fetchFirstPage('background');
    else if (state.loadMoreError) void fetchNextPage(true);
  });

  return {
    items: state.items,
    syncedAt: state.syncedAt,
    isOffline,
    isStale,
    isShowingSaved: state.source === 'cache',
    isInitialLoading: !hasItems && state.inFlight === 'background',
    isCheckingForUpdates: hasItems && state.inFlight === 'background',
    isRefreshing: state.inFlight === 'pull',
    isLoadingMore: state.inFlight === 'more',
    isEmpty: !hasItems && state.source === 'network' && state.inFlight === null,
    hasMore: state.nextPage !== null,
    refreshError: state.refreshError,
    loadMoreError: state.loadMoreError,
    refresh: useCallback(() => void fetchFirstPage('pull'), [fetchFirstPage]),
    retry: useCallback(() => void fetchFirstPage('background'), [fetchFirstPage]),
    loadMore: useCallback(() => void fetchNextPage(false), [fetchNextPage]),
    retryLoadMore: useCallback(() => void fetchNextPage(true), [fetchNextPage]),
  };
};
