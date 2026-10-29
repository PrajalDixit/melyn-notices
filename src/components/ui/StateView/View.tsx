import React from 'react';

import { VStack } from '@/components/layout/VStack';
import CustomButton from '@/components/ui/Button';
import CustomLoader from '@/components/ui/Loader';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { TestIds } from '@/utilities/testIds';

import { styles } from './Styles';
import type { StateViewViewProps } from '@/types/components/StateView';

export const StateViewView: React.FC<StateViewViewProps> = ({
  title,
  message,
  actionLabel,
  onAction,
  isLoading,
  hasAction,
  testID,
}) => (
  <VStack
    gap={spacing.md}
    alignItems="center"
    justifyContent="center"
    style={styles.container}
    accessibilityLiveRegion={isLoading ? 'polite' : undefined}
    testID={testID}
  >
    {isLoading && <CustomLoader size="large" />}
    {title && (
      <CustomText variant="headline" style={styles.centeredText} accessibilityRole="header">
        {title}
      </CustomText>
    )}
    {message && (
      <CustomText variant="body" style={styles.message}>
        {message}
      </CustomText>
    )}
    {hasAction && actionLabel && (
      <CustomButton title={actionLabel} onPress={onAction} style={styles.action} testID={TestIds.stateViewAction} />
    )}
  </VStack>
);
