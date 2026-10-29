import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ScreenSafeAreaProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  disableTopSpace?: boolean;
  disableBottomSpace?: boolean;
  testID?: string;
}

export interface ScreenSafeAreaViewProps {
  children?: ReactNode;
  containerStyle: StyleProp<ViewStyle>;
  testID?: string;
}
