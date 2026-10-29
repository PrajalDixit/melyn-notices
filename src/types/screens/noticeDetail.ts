import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/services/navigation/RootNavigator';
import type { StateViewProps } from '@/types/components/StateView';
import type { StatusBannerProps } from '@/types/components/StatusBanner';
import type { Notice, NoticeStatus } from '@/types/notice';

export type NoticeDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'NoticeDetail'>;

export interface NoticeDetailContent {
  notice: Notice;
  status: NoticeStatus;
  publishedLabel: string;
  validUntilLabel: string | null;
  expiredWarning: string | null;
  emptyBodyMessage: string;
}

export interface NoticeDetailViewModelState {
  content: NoticeDetailContent | null;
  placeholder: StateViewProps;
  banner: StatusBannerProps | null;
}

export interface NoticeDetailScreenViewProps {
  state: NoticeDetailViewModelState;
}
