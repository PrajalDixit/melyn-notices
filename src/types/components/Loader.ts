import type { ActivityIndicatorProps } from 'react-native';

export interface CustomLoaderProps extends ActivityIndicatorProps {
  size?: 'small' | 'large';
}

export type LoaderViewProps = CustomLoaderProps;
