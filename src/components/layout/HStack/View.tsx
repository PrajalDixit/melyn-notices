import React from 'react';
import { View } from 'react-native';

import type { HStackViewProps } from '@/types/components/HStack';

export const HStackView: React.FC<HStackViewProps> = ({ containerStyle, children, ...viewProps }) => (
  <View style={containerStyle} {...viewProps}>
    {children}
  </View>
);
