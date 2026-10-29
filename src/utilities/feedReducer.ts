import type { CategoryFilter, NoticePage } from '@/types/notice';
import type { FeedAction, FeedState } from '@/types/feed';

export const createInitialFeedState = (category: CategoryFilter): FeedState => ({
  category,
  items: [],
  nextPage: null,
  source: 'none',
  syncedAt: null,
  inFlight: null,
  refreshError: null,
  loadMoreError: null,
});

const nextPageOf = (page: NoticePage) => (page.hasMore ? page.page + 1 : null);

export const feedReducer = (state: FeedState, action: FeedAction): FeedState => {
  switch (action.type) {
    case 'reset':
      return createInitialFeedState(action.category);

    case 'cacheLoaded':
      if (action.category !== state.category || state.source === 'network') return state;
      return {
        ...state,
        items: action.items,
        nextPage: action.nextPage,
        source: 'cache',
        syncedAt: action.savedAt,
      };

    case 'refreshStarted':
      return { ...state, inFlight: action.request, refreshError: null, loadMoreError: null };

    case 'refreshSucceeded':
      return {
        ...state,
        items: action.page.items,
        nextPage: nextPageOf(action.page),
        source: 'network',
        syncedAt: action.at,
        inFlight: null,
        refreshError: null,
      };

    case 'refreshFailed':
      return { ...state, inFlight: null, refreshError: action.error };

    case 'loadMoreStarted':
      return { ...state, inFlight: 'more', loadMoreError: null };

    case 'loadMoreSucceeded': {
      const seenIds = new Set(state.items.map((notice) => notice.id));
      const freshNotices = action.page.items.filter((notice) => !seenIds.has(notice.id));
      return {
        ...state,
        items: [...state.items, ...freshNotices],
        nextPage: nextPageOf(action.page),
        inFlight: null,
      };
    }

    case 'loadMoreFailed':
      return { ...state, inFlight: null, loadMoreError: action.error };
  }
};
