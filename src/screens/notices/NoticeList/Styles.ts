import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  listContent: {
    padding: spacing.lg,
  },
  listContentEmpty: {
    flexGrow: 1,
  },
  separator: {
    height: spacing.md,
  },
});

export const refreshColors = {
  tint: Colors.primary,
  android: [Colors.primary],
};
