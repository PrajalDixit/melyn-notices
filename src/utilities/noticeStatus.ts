import type { Notice, NoticeStatus } from '@/types/notice';

export const isExpired = (notice: Notice, now: number = Date.now()): boolean =>
  notice.expiresAt !== null && Date.parse(notice.expiresAt) <= now;

export const isUrgent = (notice: Notice, now: number = Date.now()): boolean =>
  notice.priority === 'high' && !isExpired(notice, now);

export const getNoticeStatus = (notice: Notice, now: number = Date.now()): NoticeStatus => ({
  isExpired: isExpired(notice, now),
  isUrgent: isUrgent(notice, now),
});
