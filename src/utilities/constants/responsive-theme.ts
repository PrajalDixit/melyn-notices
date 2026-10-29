import { moderateScale, responsiveFontSize } from '@/utilities/responsive';

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 64,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  pill: 999,
};

export const fontSizes = {
  xs: responsiveFontSize(10),
  small: responsiveFontSize(12),
  regular: responsiveFontSize(14),
  medium: responsiveFontSize(16),
  large: responsiveFontSize(20),
  xlarge: responsiveFontSize(24),
  xxlarge: responsiveFontSize(32),
  xxxlarge: responsiveFontSize(40),
};

export const lineHeights = {
  xs: moderateScale(14),
  small: moderateScale(16),
  regular: moderateScale(20),
  medium: moderateScale(24),
  large: moderateScale(28),
  xlarge: moderateScale(32),
  xxlarge: moderateScale(40),
  xxxlarge: moderateScale(48),
};
