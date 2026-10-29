import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  bar: {
    flexGrow: 0,
    flexShrink: 0, // ScrollView shrinks by default and squashes the chips
    backgroundColor: Colors.backgroundSurface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.borderColor,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
});
