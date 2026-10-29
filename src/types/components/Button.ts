import type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'outline' | 'chip' | 'link' | 'text';

export interface CustomButtonProps extends Omit<PressableProps, 'style' | 'children'> {
  title: string;
  variant?: ButtonVariant;
  isSelected?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export interface ButtonViewProps extends Omit<PressableProps, 'style' | 'children'> {
  title: string;
  loading: boolean;
  loaderColor: string;
  resolveContainerStyle: (state: { pressed: boolean }) => StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
}
