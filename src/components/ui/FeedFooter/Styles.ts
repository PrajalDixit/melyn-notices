import { StyleSheet } from 'react-native';

import { spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  message: {
    textAlign: 'center',
  },
});
