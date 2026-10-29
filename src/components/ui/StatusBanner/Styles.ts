import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { spacing } from '@/utilities/constants/responsive-theme';
import { FontWeights, SFUI } from '@/utilities/constants/theme';

export const styles = StyleSheet.create({
  banner: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + spacing.xxs,
  },
  warningBanner: {
    backgroundColor: Colors.warningAmberLight,
  },
  infoBanner: {
    backgroundColor: Colors.primaryLight,
  },
  message: {
    flex: 1,
  },
  actionLabel: {
    fontFamily: SFUI.bold,
    fontWeight: FontWeights.bold,
  },
});

export const toneColors = {
  warning: Colors.warningAmber,
  info: Colors.primary,
} as const;
