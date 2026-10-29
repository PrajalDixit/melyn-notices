import React, { useMemo } from 'react';

import { styles } from './Styles';
import { TextView } from './View';
import type { CustomTextProps } from '@/types/components/Text';

export const CustomText: React.FC<CustomTextProps> = ({ variant = 'default', style, children, ...textProps }) => {
  const textStyle = useMemo(() => [styles[variant], style], [variant, style]);

  return (
    <TextView textStyle={textStyle} {...textProps}>
      {children}
    </TextView>
  );
};

export default CustomText;
