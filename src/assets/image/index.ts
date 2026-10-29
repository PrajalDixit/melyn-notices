export const Images = {
  androidIconBackground: require('./android-icon-background.png'),
  androidIconForeground: require('./android-icon-foreground.png'),
  androidIconMonochrome: require('./android-icon-monochrome.png'),
  favicon: require('./favicon.png'),
  icon: require('./icon.png'),
  splashIcon: require('./splash-icon.png'),
} as const;

export type ImageName = keyof typeof Images;
