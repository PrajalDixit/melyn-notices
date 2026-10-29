import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { radius, spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.backgroundSurface,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
  expiredCallout: {
    backgroundColor: Colors.warningAmberLight,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  expiredText: {
    color: Colors.warningAmber,
  },
  emptyBody: {
    fontStyle: 'italic',
    color: Colors.textSecondary,
  },
});
