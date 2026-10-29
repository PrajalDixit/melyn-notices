import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './Styles';
import { ScreenSafeAreaView } from './View';
import type { ScreenSafeAreaProps } from '@/types/components/ScreenSafeArea';

export const ScreenSafeAreaContainer: React.FC<ScreenSafeAreaProps> = ({
  style,
  disableTopSpace = false,
  disableBottomSpace = false,
  testID,
  children,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        paddingTop: disableTopSpace ? 0 : insets.top,
        paddingBottom: disableBottomSpace ? 0 : insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      },
      style,
    ],
    [disableTopSpace, disableBottomSpace, insets, style],
  );

  return (
    <ScreenSafeAreaView containerStyle={containerStyle} testID={testID}>
      {children}
    </ScreenSafeAreaView>
  );
};

export default ScreenSafeAreaContainer;
