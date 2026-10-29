export interface StateViewProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  isLoading?: boolean;
  testID?: string;
}

export interface StateViewViewProps extends StateViewProps {
  hasAction: boolean;
}
