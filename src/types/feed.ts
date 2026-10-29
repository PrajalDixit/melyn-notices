import type { ApiError } from '@/services/api-services/api-errors';
import type { CategoryFilter, Notice, NoticePage } from '@/types/notice';

export type FeedRequest = 'background' | 'pull' | 'more';

export interface FeedState {
  category: CategoryFilter;
  items: Notice[];
  nextPage: number | null;
  source: 'none' | 'cache' | 'network';
  syncedAt: number | null;
  inFlight: FeedRequest | null;
  refreshError: ApiError | null;
  loadMoreError: ApiError | null;
}

export type FeedAction =
  | { type: 'reset'; category: CategoryFilter }
  | { type: 'cacheLoaded'; category: CategoryFilter; items: Notice[]; nextPage: number | null; savedAt: number }
  | { type: 'refreshStarted'; request: 'background' | 'pull' }
  | { type: 'refreshSucceeded'; page: NoticePage; at: number }
  | { type: 'refreshFailed'; error: ApiError }
  | { type: 'loadMoreStarted' }
  | { type: 'loadMoreSucceeded'; page: NoticePage }
  | { type: 'loadMoreFailed'; error: ApiError };

export interface CachedFeed {
  items: Notice[];
  nextPage: number | null;
  savedAt: number;
}

export interface NoticeFeed {
  items: Notice[];
  syncedAt: number | null;
  isOffline: boolean;
  isStale: boolean;
  isShowingSaved: boolean;
  isInitialLoading: boolean;
  isCheckingForUpdates: boolean;
  isRefreshing: boolean;
  isLoadingMore: boolean;
  isEmpty: boolean;
  hasMore: boolean;
  refreshError: ApiError | null;
  loadMoreError: ApiError | null;
  refresh: () => void;
  retry: () => void;
  loadMore: () => void;
  retryLoadMore: () => void;
}
