import React, { useCallback, useMemo } from 'react';
import { StyleSheet, type TextStyle } from 'react-native';

import { containerStyles, labelStyles } from './Styles';
import { ButtonView } from './View';
import type { CustomButtonProps } from '@/types/components/Button';

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'primary',
  isSelected = false,
  loading = false,
  disabled = false,
  style,
  textStyle,
  accessibilityRole = 'button',
  accessibilityLabel,
  accessibilityState,
  ...pressableProps
}) => {
  const isChipSelected = variant === 'chip' && isSelected;
  const isInactive = disabled || loading;

  const resolveContainerStyle = useCallback(
    ({ pressed }: { pressed: boolean }) => [
      containerStyles.base,
      containerStyles[variant],
      isChipSelected && containerStyles.chipSelected,
      pressed && containerStyles.pressed,
      disabled && containerStyles.disabled,
      style,
    ],
    [variant, isChipSelected, disabled, style],
  );

  const labelStyle = useMemo(
    () => [labelStyles[variant], isChipSelected && labelStyles.chipSelected, textStyle],
    [variant, isChipSelected, textStyle],
  );

  const loaderColor = (StyleSheet.flatten(labelStyle) as TextStyle).color as string;

  return (
    <ButtonView
      title={title}
      loading={loading}
      loaderColor={loaderColor}
      resolveContainerStyle={resolveContainerStyle}
      labelStyle={labelStyle}
      disabled={isInactive}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{ disabled: isInactive, busy: loading, ...accessibilityState }}
      {...pressableProps}
    />
  );
};

export default CustomButton;
