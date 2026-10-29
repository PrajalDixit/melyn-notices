import type { ViewStyle } from 'react-native';

import type { StackProps } from '@/types/components/Stack';

type StackLayout = Pick<StackProps, 'gap' | 'justifyContent' | 'alignItems' | 'flex' | 'margin' | 'shouldWrap'>;

export const resolveStackStyle = ({
  gap = 0,
  justifyContent = 'flex-start',
  alignItems,
  flex,
  margin,
  shouldWrap = false,
}: StackLayout): ViewStyle => ({
  gap,
  justifyContent,
  alignItems,
  flex,
  margin,
  flexWrap: shouldWrap ? 'wrap' : 'nowrap',
});
