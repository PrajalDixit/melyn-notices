import type { Notice, NoticeStatus } from '@/types/notice';

export interface NoticeCardProps {
  notice: Notice;
  isRead: boolean;
  onPress: (id: string) => void;
}

export interface NoticeCardViewProps {
  notice: Notice;
  status: NoticeStatus;
  isRead: boolean;
  publishedLabel: string;
  accessibilityLabel: string;
  onPress: () => void;
}
