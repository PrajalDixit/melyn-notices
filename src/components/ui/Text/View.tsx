import React from 'react';
import { Text } from 'react-native';

import type { TextViewProps } from '@/types/components/Text';

export const TextView: React.FC<TextViewProps> = ({ textStyle, children, ...textProps }) => (
  <Text style={textStyle} {...textProps}>
    {children}
  </Text>
);
