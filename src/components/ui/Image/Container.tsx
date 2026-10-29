import React from 'react';

import { imageDefaults } from './Styles';
import { ImageView } from './View';
import type { CustomImageProps } from '@/types/components/Image';

export const CustomImage: React.FC<CustomImageProps> = ({
  contentFit = imageDefaults.contentFit,
  transition = imageDefaults.transition,
  ...imageProps
}) => <ImageView contentFit={contentFit} transition={transition} {...imageProps} />;

export default CustomImage;
