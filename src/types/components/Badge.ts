import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CustomBadgeProps {
  label: string;
  color: string;
  backgroundColor: string;
}

export interface BadgeViewProps {
  label: string;
  containerStyle: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
}
