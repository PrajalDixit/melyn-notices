import type { CategoryFilter } from '@/types/notice';

export const StorageKeys = {
  readNoticeIds: '@mdnect/notices_read_ids',
  feedCachePrefix: '@mdnect/notices_feed_cache',
} as const;

export const feedCacheKey = (category: CategoryFilter) =>
  `${StorageKeys.feedCachePrefix}_${category}` as const;

export type FeedCacheKey = ReturnType<typeof feedCacheKey>;

export type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys] | FeedCacheKey;
