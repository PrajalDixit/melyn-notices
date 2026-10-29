import { Dimensions, PixelRatio } from 'react-native';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
const MAX_SCALE_RATIO = 1.2;

const { width, height } = Dimensions.get('window');
const shortDimension = Math.min(width, height);
const longDimension = Math.max(width, height);

const widthRatio = Math.min(shortDimension / BASE_WIDTH, MAX_SCALE_RATIO);
const heightRatio = Math.min(longDimension / BASE_HEIGHT, MAX_SCALE_RATIO);

export const horizontalScale = (size: number): number => widthRatio * size;

export const scale = horizontalScale;

export const verticalScale = (size: number): number => heightRatio * size;

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export const responsiveFontSize = (size: number): number =>
  PixelRatio.roundToNearestPixel(moderateScale(size));
