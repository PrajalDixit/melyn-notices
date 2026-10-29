import React, { useMemo } from 'react';

import { resolveStackStyle } from '@/utilities/stackStyle';

import { styles } from './Styles';
import { HStackView } from './View';
import type { HStackProps } from '@/types/components/HStack';

export const HStackContainer: React.FC<HStackProps> = ({
  gap,
  justifyContent,
  alignItems = 'center',
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
    <HStackView containerStyle={containerStyle} {...viewProps}>
      {children}
    </HStackView>
  );
};

export default HStackContainer;
