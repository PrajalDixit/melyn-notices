import React from 'react';
import { Pressable } from 'react-native';

import CustomLoader from '@/components/ui/Loader';
import CustomText from '@/components/ui/Text';

import type { ButtonViewProps } from '@/types/components/Button';

export const ButtonView: React.FC<ButtonViewProps> = ({
  title,
  loading,
  loaderColor,
  resolveContainerStyle,
  labelStyle,
  ...pressableProps
}) => (
  <Pressable style={resolveContainerStyle} {...pressableProps}>
    {loading ? (
      <CustomLoader color={loaderColor} />
    ) : (
      <CustomText variant="label" style={labelStyle}>
        {title}
      </CustomText>
    )}
  </Pressable>
);
