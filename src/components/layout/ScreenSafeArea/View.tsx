import React from 'react';
import { View } from 'react-native';

import type { ScreenSafeAreaViewProps } from '@/types/components/ScreenSafeArea';

export const ScreenSafeAreaView: React.FC<ScreenSafeAreaViewProps> = ({ containerStyle, testID, children }) => (
  <View style={containerStyle} testID={testID}>
    {children}
  </View>
);
