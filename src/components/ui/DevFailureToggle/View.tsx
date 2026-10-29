import React from 'react';
import { Switch } from 'react-native';

import { HStack } from '@/components/layout/HStack';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { Strings } from '@/utilities/strings';
import { TestIds } from '@/utilities/testIds';

import { switchColors } from './Styles';
import type { DevFailureToggleViewProps } from '@/types/components/DevFailureToggle';

export const DevFailureToggleView: React.FC<DevFailureToggleViewProps> = ({ isEnabled, onToggle }) => (
  <HStack gap={spacing.sm} alignItems="center">
    <CustomText variant="captionSemiBold">{Strings.devTools.failureToggleLabel}</CustomText>
    <Switch
      value={isEnabled}
      onValueChange={onToggle}
      trackColor={switchColors.track}
      thumbColor={switchColors.thumb}
      ios_backgroundColor={switchColors.track.false}
      accessibilityLabel={Strings.devTools.failureToggleAccessibilityLabel}
      testID={TestIds.devFailureToggle}
    />
  </HStack>
);
