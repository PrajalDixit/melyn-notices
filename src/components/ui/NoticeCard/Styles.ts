import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { radius, spacing } from '@/utilities/constants/responsive-theme';
import { borderWidths, indicatorSizes, opacities } from '@/utilities/numerics';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundSurface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: borderWidths.thin,
    borderColor: Colors.borderColor,
    overflow: 'hidden',
  },
  cardRead: {
    backgroundColor: Colors.backgroundSurfaceRead,
  },
  cardUrgent: {
    borderLeftColor: Colors.urgentRed,
    borderLeftWidth: borderWidths.accent,
  },
  pressed: {
    opacity: opacities.pressed,
  },
  unreadDot: {
    width: indicatorSizes.unreadDot,
    height: indicatorSizes.unreadDot,
    borderRadius: indicatorSizes.unreadDot / 2,
    marginTop: spacing.xs,
    backgroundColor: Colors.primary,
  },
  titleRead: {
    color: Colors.textMuted,
  },
  preview: {
    color: Colors.textMuted,
  },
});

export const rippleConfig = { color: Colors.borderColor };
