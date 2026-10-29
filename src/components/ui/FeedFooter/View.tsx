import React from 'react';

import { VStack } from '@/components/layout/VStack';
import CustomButton from '@/components/ui/Button';
import CustomLoader from '@/components/ui/Loader';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { hitSlops } from '@/utilities/numerics';
import { Strings } from '@/utilities/strings';
import { TestIds } from '@/utilities/testIds';

import { styles } from './Styles';
import type { FeedFooterViewProps } from '@/types/components/FeedFooter';

export const FeedFooterView: React.FC<FeedFooterViewProps> = ({ isLoading, message, onRetry }) => (
  <VStack gap={spacing.sm} alignItems="center" style={styles.container} testID={TestIds.noticeList.footer}>
    {isLoading && <CustomLoader />}
    {message && (
      <CustomText variant="bodySmall" style={styles.message}>
        {message}
      </CustomText>
    )}
    {onRetry && (
      <CustomButton
        variant="outline"
        title={Strings.common.tryAgain}
        onPress={onRetry}
        hitSlop={hitSlops.sm}
        testID={TestIds.feedFooterRetry}
      />
    )}
  </VStack>
);
