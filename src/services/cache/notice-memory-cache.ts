import type { Notice } from '@/types/notice';

const rememberedNotices = new Map<string, Notice>();

export const NoticeMemoryCache = {
  remember: (notices: Notice[]): void => {
    for (const notice of notices) rememberedNotices.set(notice.id, notice);
  },

  get: (id: string): Notice | undefined => rememberedNotices.get(id),
};
