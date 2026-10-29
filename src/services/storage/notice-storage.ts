import type { CachedFeed } from '@/types/feed';
import type { CategoryFilter } from '@/types/notice';

import { feedCacheKey, StorageKeys } from './storage-keys';
import { StorageService } from './storage-service';

const isCachedFeed = (value: unknown): value is CachedFeed => {
  const candidate = value as Partial<CachedFeed> | null;
  return !!candidate && Array.isArray(candidate.items) && typeof candidate.savedAt === 'number';
};

export const NoticeStorage = {
  loadCachedFeed: async (category: CategoryFilter): Promise<CachedFeed | null> => {
    const stored = await StorageService.getObject(feedCacheKey(category));
    return isCachedFeed(stored) ? stored : null;
  },

  saveCachedFeed: (category: CategoryFilter, feed: CachedFeed): Promise<void> =>
    StorageService.setObject(feedCacheKey(category), feed),

  loadReadIds: async (): Promise<string[]> => {
    const stored = await StorageService.getObject(StorageKeys.readNoticeIds);
    return Array.isArray(stored) ? stored.filter((id): id is string => typeof id === 'string') : [];
  },

  saveReadIds: (ids: string[]): Promise<void> => StorageService.setObject(StorageKeys.readNoticeIds, ids),
};
