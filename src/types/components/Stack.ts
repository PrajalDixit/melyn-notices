import type { ReactNode } from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface StackProps extends Omit<ViewProps, 'style'> {
  children?: ReactNode;
  gap?: number;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  flex?: number;
  margin?: ViewStyle['margin'];
  shouldWrap?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface StackViewProps extends Omit<ViewProps, 'style'> {
  children?: ReactNode;
  containerStyle: StyleProp<ViewStyle>;
}
