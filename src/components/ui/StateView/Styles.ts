import { StyleSheet } from 'react-native';

import { Colors } from '@/utilities/constants/colors';
import { spacing } from '@/utilities/constants/responsive-theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    paddingVertical: spacing.xxxl,
  },
  centeredText: {
    textAlign: 'center',
  },
  message: {
    color: Colors.textMuted,
    textAlign: 'center',
  },
  action: {
    marginTop: spacing.sm,
  },
});
