import React from 'react';
import { View } from 'react-native';

import CustomText from '@/components/ui/Text';

import type { BadgeViewProps } from '@/types/components/Badge';

export const BadgeView: React.FC<BadgeViewProps> = ({ label, containerStyle, labelStyle }) => (
  <View style={containerStyle}>
    <CustomText variant="captionSemiBold" style={labelStyle}>
      {label}
    </CustomText>
  </View>
);
