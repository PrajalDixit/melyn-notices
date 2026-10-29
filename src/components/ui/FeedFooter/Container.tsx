import React from 'react';

import { describeError } from '@/services/api-services/api-errors';
import { Strings } from '@/utilities/strings';

import { FeedFooterView } from './View';
import type { FeedFooterProps, FeedFooterViewProps } from '@/types/components/FeedFooter';

const resolveFooter = ({
  isLoadingMore,
  error,
  hasMore,
  isShowingSaved,
  onRetry,
}: FeedFooterProps): FeedFooterViewProps | null => {
  if (isLoadingMore) return { isLoading: true, message: null };
  if (error) {
    return { isLoading: false, message: Strings.noticeList.loadMoreError(describeError(error)), onRetry };
  }
  if (isShowingSaved && hasMore) return { isLoading: false, message: Strings.noticeList.waitingForServer };
  if (!hasMore) return { isLoading: false, message: Strings.noticeList.caughtUp };
  return null;
};

export const FeedFooterContainer: React.FC<FeedFooterProps> = (props) => {
  const footer = resolveFooter(props);
  return footer ? <FeedFooterView {...footer} /> : null;
};

export default FeedFooterContainer;
