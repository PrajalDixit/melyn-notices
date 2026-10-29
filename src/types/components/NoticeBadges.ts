import type { Notice, NoticeStatus } from '@/types/notice';
import type { CustomBadgeProps } from './Badge';

export interface NoticeBadgesProps {
  notice: Notice;
  status?: NoticeStatus;
  shouldShowCategory?: boolean;
}

export interface NoticeBadgeItem extends CustomBadgeProps {
  key: string;
}

export interface NoticeBadgesViewProps {
  badges: NoticeBadgeItem[];
}
