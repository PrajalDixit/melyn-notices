import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { radius, spacing } from '@/utilities/constants/responsive-theme';
import { borderWidths, opacities } from '@/utilities/numerics';

export const containerStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  outline: {
    borderWidth: borderWidths.thin,
    borderColor: Colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  chip: {
    borderWidth: borderWidths.thin,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundSurface,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md + spacing.xxs,
    paddingVertical: spacing.sm,
  },
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  link: {},
  text: {},
  pressed: {
    opacity: opacities.pressed,
  },
  disabled: {
    opacity: opacities.disabled,
  },
});

export const labelStyles = StyleSheet.create({
  primary: {
    color: Colors.white,
  },
  outline: {
    color: Colors.primary,
  },
  chip: {
    color: Colors.textMuted,
  },
  chipSelected: {
    color: Colors.white,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  text: {
    color: Colors.textSecondary,
  },
});
