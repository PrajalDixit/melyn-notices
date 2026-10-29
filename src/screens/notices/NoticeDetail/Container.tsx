import React, { useCallback, useEffect } from 'react';

import { useNotice, useReadNotices } from '@/hooks';
import { describeError, type ApiError } from '@/services/api-services/api-errors';
import NavigationService from '@/services/navigation/navigation-service';
import { formatDate, formatDateTime } from '@/utilities/dates';
import { getNoticeStatus } from '@/utilities/noticeStatus';
import { Strings } from '@/utilities/strings';
import { TestIds } from '@/utilities/testIds';

import { NoticeDetailScreenView } from './View';
import type { StateViewProps } from '@/types/components/StateView';
import type { Notice } from '@/types/notice';
import type {
  NoticeDetailContent,
  NoticeDetailScreenProps,
  NoticeDetailViewModelState,
} from '@/types/screens/noticeDetail';

const buildContent = (notice: Notice): NoticeDetailContent => {
  const status = getNoticeStatus(notice);
  return {
    notice,
    status,
    publishedLabel: Strings.noticeDetail.published(formatDateTime(notice.publishedAt)),
    validUntilLabel:
      notice.expiresAt && !status.isExpired ? Strings.noticeDetail.validUntil(formatDate(notice.expiresAt)) : null,
    expiredWarning:
      notice.expiresAt && status.isExpired
        ? Strings.noticeDetail.expiredWarning(formatDateTime(notice.expiresAt))
        : null,
    emptyBodyMessage: Strings.noticeDetail.emptyBody(notice.department),
  };
};

const buildPlaceholder = (error: ApiError | null, onRetry: () => void, onBack: () => void): StateViewProps => {
  const testID = TestIds.noticeDetail.stateView;

  if (error?.kind === 'not_found') {
    return {
      title: Strings.noticeDetail.notFoundTitle,
      message: Strings.noticeDetail.notFoundMessage,
      actionLabel: Strings.noticeDetail.backToNotices,
      onAction: onBack,
      testID,
    };
  }
  if (error) {
    return {
      title: Strings.noticeDetail.loadErrorTitle,
      message: describeError(error),
      actionLabel: Strings.common.tryAgain,
      onAction: onRetry,
      testID,
    };
  }
  return { isLoading: true, message: Strings.noticeDetail.loading, testID };
};

export const NoticeDetailScreenContainer: React.FC<NoticeDetailScreenProps> = ({ route }) => {
  const { noticeId } = route.params;
  const { notice, error, isOffline, retry } = useNotice(noticeId);
  const { markRead } = useReadNotices();

  const visibleId = notice?.id;
  useEffect(() => {
    if (visibleId) markRead(visibleId);
  }, [visibleId, markRead]);

  const handleBack = useCallback(() => NavigationService.goBack(), []);

  const noticeDetailViewModel: NoticeDetailViewModelState = {
    content: notice ? buildContent(notice) : null,
    placeholder: buildPlaceholder(error, retry, handleBack),
    banner:
      notice && error
        ? {
            message: isOffline ? Strings.noticeDetail.offlineBanner : Strings.noticeDetail.refreshErrorBanner,
            actionLabel: Strings.common.retry,
            onAction: retry,
            testID: TestIds.noticeDetail.banner,
          }
        : null,
  };

  return <NoticeDetailScreenView state={noticeDetailViewModel} />;
};

export default NoticeDetailScreenContainer;
