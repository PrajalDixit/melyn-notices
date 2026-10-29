import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { fontSizes, lineHeights } from '@/utilities/constants/responsive-theme';
import { FontWeights, SFUI } from '@/utilities/constants/theme';

export const styles = StyleSheet.create({
  default: {
    fontFamily: SFUI.regular,
    fontWeight: FontWeights.regular,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    color: Colors.textPrimary,
  },
  defaultSemiBold: {
    fontFamily: SFUI.semibold,
    fontWeight: FontWeights.semibold,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    color: Colors.textPrimary,
  },
  defaultBold: {
    fontFamily: SFUI.bold,
    fontWeight: FontWeights.bold,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    color: Colors.textPrimary,
  },
  title: {
    fontFamily: SFUI.bold,
    fontWeight: FontWeights.bold,
    fontSize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxxlarge,
    color: Colors.textPrimary,
  },
  heading: {
    fontFamily: SFUI.bold,
    fontWeight: FontWeights.bold,
    fontSize: fontSizes.xlarge,
    lineHeight: lineHeights.xlarge,
    color: Colors.textPrimary,
  },
  headline: {
    fontFamily: SFUI.bold,
    fontWeight: FontWeights.bold,
    fontSize: fontSizes.large,
    lineHeight: lineHeights.large,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: SFUI.medium,
    fontWeight: FontWeights.medium,
    fontSize: fontSizes.large,
    lineHeight: lineHeights.large,
    color: Colors.textSecondary,
  },
  body: {
    fontFamily: SFUI.regular,
    fontWeight: FontWeights.regular,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    color: Colors.textPrimary,
  },
  bodySmall: {
    fontFamily: SFUI.regular,
    fontWeight: FontWeights.regular,
    fontSize: fontSizes.regular,
    lineHeight: lineHeights.regular,
    color: Colors.textSecondary,
  },
  label: {
    fontFamily: SFUI.semibold,
    fontWeight: FontWeights.semibold,
    fontSize: fontSizes.regular,
    lineHeight: lineHeights.regular,
    color: Colors.textPrimary,
  },
  caption: {
    fontFamily: SFUI.regular,
    fontWeight: FontWeights.regular,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    color: Colors.textSecondary,
  },
  captionSemiBold: {
    fontFamily: SFUI.semibold,
    fontWeight: FontWeights.semibold,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small,
    color: Colors.textSecondary,
  },
  link: {
    fontFamily: SFUI.regular,
    fontWeight: FontWeights.regular,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    color: Colors.primary,
  },
});
