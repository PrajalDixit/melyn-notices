import React from 'react';
import { View } from 'react-native';

import type { VStackViewProps } from '@/types/components/VStack';

export const VStackView: React.FC<VStackViewProps> = ({ containerStyle, children, ...viewProps }) => (
  <View style={containerStyle} {...viewProps}>
    {children}
  </View>
);
