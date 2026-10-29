import type { ApiError } from '@/services/api-services/api-errors';

export interface FeedFooterProps {
  isLoadingMore: boolean;
  error: ApiError | null;
  hasMore: boolean;
  isShowingSaved: boolean;
  onRetry: () => void;
}

export interface FeedFooterViewProps {
  isLoading: boolean;
  message: string | null;
  onRetry?: () => void;
}
