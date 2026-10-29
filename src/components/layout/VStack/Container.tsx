import React, { useMemo } from 'react';

import { resolveStackStyle } from '@/utilities/stackStyle';

import { styles } from './Styles';
import { VStackView } from './View';
import type { VStackProps } from '@/types/components/VStack';

export const VStackContainer: React.FC<VStackProps> = ({
  gap,
  justifyContent,
  alignItems = 'flex-start',
  flex,
  margin,
  shouldWrap,
  style,
  children,
  ...viewProps
}) => {
  const containerStyle = useMemo(
    () => [styles.container, resolveStackStyle({ gap, justifyContent, alignItems, flex, margin, shouldWrap }), style],
    [gap, justifyContent, alignItems, flex, margin, shouldWrap, style],
  );

  return (
    <VStackView containerStyle={containerStyle} {...viewProps}>
      {children}
    </VStackView>
  );
};

export default VStackContainer;
