import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { radius, spacing } from '@/utilities/constants/responsive-theme';
import { borderWidths, imageSizes } from '@/utilities/numerics';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: imageSizes.noticeAspectRatio,
    borderRadius: radius.lg,
    backgroundColor: Colors.backgroundNeutral,
  },
  fallback: {
    borderRadius: radius.lg,
    borderWidth: borderWidths.thin,
    borderStyle: 'dashed',
    borderColor: Colors.borderColor,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
});
