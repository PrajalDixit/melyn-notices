import { Platform } from 'react-native';

const systemFont = Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' });

export const SFUI = {
  thin: Platform.select({ android: 'sans-serif-thin', default: systemFont }),
  ultralight: Platform.select({ android: 'sans-serif-thin', default: systemFont }),
  light: Platform.select({ android: 'sans-serif-light', default: systemFont }),
  regular: systemFont,
  medium: Platform.select({ android: 'sans-serif-medium', default: systemFont }),
  semibold: Platform.select({ android: 'sans-serif-medium', default: systemFont }),
  bold: systemFont,
  heavy: Platform.select({ android: 'sans-serif-black', default: systemFont }),
  black: Platform.select({ android: 'sans-serif-black', default: systemFont }),
} as const;

export const FontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;
