import React from 'react';

import { HStack } from '@/components/layout/HStack';
import CustomButton from '@/components/ui/Button';
import CustomLoader from '@/components/ui/Loader';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { hitSlops } from '@/utilities/numerics';

import { styles } from './Styles';
import type { StatusBannerViewProps } from '@/types/components/StatusBanner';

export const StatusBannerView: React.FC<StatusBannerViewProps> = ({
  message,
  isBusy,
  actionLabel,
  onAction,
  toneColor,
  containerStyle,
  toneTextStyle,
  testID,
}) => (
  <HStack gap={spacing.md} style={containerStyle} accessibilityRole="alert" testID={testID}>
    <CustomText variant="bodySmall" style={[styles.message, toneTextStyle]}>
      {message}
    </CustomText>
    {isBusy ? (
      <CustomLoader color={toneColor} />
    ) : (
      actionLabel &&
      onAction && (
        <CustomButton
          variant="link"
          title={actionLabel}
          onPress={onAction}
          hitSlop={hitSlops.sm}
          textStyle={[styles.actionLabel, toneTextStyle]}
        />
      )
    )}
  </HStack>
);
