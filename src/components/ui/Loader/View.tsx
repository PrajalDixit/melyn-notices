import React from 'react';
import { ActivityIndicator } from 'react-native';

import type { LoaderViewProps } from '@/types/components/Loader';

export const LoaderView: React.FC<LoaderViewProps> = (loaderProps) => <ActivityIndicator {...loaderProps} />;
