import { StyleSheet } from 'react-native';

import { radius, spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  badge: {
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    alignSelf: 'flex-start',
  },
});
