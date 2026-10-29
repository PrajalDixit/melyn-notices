import type { ReactNode } from 'react';
import type { TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';

export type TextVariant =
  | 'default'
  | 'defaultSemiBold'
  | 'defaultBold'
  | 'title'
  | 'heading'
  | 'headline'
  | 'subtitle'
  | 'body'
  | 'bodySmall'
  | 'label'
  | 'caption'
  | 'captionSemiBold'
  | 'link';

export interface CustomTextProps extends RNTextProps {
  children: ReactNode;
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
}

export interface TextViewProps extends RNTextProps {
  children: ReactNode;
  textStyle: StyleProp<TextStyle>;
}
