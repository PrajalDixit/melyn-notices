import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type StatusBannerTone = 'warning' | 'info';

export interface StatusBannerProps {
  message: string;
  tone?: StatusBannerTone;
  isBusy?: boolean;
  actionLabel?: string;
  onAction?: () => void;
  testID?: string;
}

export interface StatusBannerViewProps {
  message: string;
  isBusy: boolean;
  actionLabel?: string;
  onAction?: () => void;
  toneColor: string;
  containerStyle: StyleProp<ViewStyle>;
  toneTextStyle: StyleProp<TextStyle>;
  testID?: string;
}
