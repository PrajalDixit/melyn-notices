import type { ListRenderItem } from 'react-native';

import type { FeedFooterProps } from '@/types/components/FeedFooter';
import type { StateViewProps } from '@/types/components/StateView';
import type { StatusBannerProps } from '@/types/components/StatusBanner';
import type { CategoryFilter, Notice } from '@/types/notice';

export interface NoticeListViewModelState {
  category: CategoryFilter;
  notices: Notice[];
  readIds: ReadonlySet<string>;
  hasItems: boolean;
  isRefreshing: boolean;
  banner: StatusBannerProps | null;
  emptyState: StateViewProps | null;
  footer: FeedFooterProps | null;
}

export interface NoticeListScreenViewProps {
  state: NoticeListViewModelState;
  renderNoticeItem: ListRenderItem<Notice>;
  onCategoryChange: (category: CategoryFilter) => void;
  onRefresh: () => void;
  onEndReached: () => void;
}
