import React from 'react';
import { Image } from 'expo-image';

import type { ImageViewProps } from '@/types/components/Image';

export const ImageView: React.FC<ImageViewProps> = (imageProps) => <Image {...imageProps} />;
