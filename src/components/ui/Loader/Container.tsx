import React from 'react';

import { loaderDefaults } from './Styles';
import { LoaderView } from './View';
import type { CustomLoaderProps } from '@/types/components/Loader';

export const CustomLoader: React.FC<CustomLoaderProps> = ({
  size = 'small',
  color = loaderDefaults.color,
  ...loaderProps
}) => <LoaderView size={size} color={color} {...loaderProps} />;

export default CustomLoader;
