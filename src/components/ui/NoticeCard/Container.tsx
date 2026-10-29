import React, { memo, useCallback, useMemo } from 'react';

import { formatDate } from '@/utilities/dates';
import { getNoticeStatus } from '@/utilities/noticeStatus';
import { Strings } from '@/utilities/strings';

import { NoticeCardView } from './View';
import type { NoticeCardProps } from '@/types/components/NoticeCard';

const NoticeCardComponent: React.FC<NoticeCardProps> = ({ notice, isRead, onPress }) => {
  const status = useMemo(() => getNoticeStatus(notice), [notice]);
  const publishedLabel = formatDate(notice.publishedAt);

  const accessibilityLabel = [
    isRead ? null : Strings.notice.unread,
    status.isUrgent ? Strings.notice.highPriority : null,
    status.isExpired ? Strings.notice.expired : null,
    notice.title,
    `${notice.department}, ${publishedLabel}`,
  ]
    .filter(Boolean)
    .join('. ');

  const handlePress = useCallback(() => onPress(notice.id), [onPress, notice.id]);

  return (
    <NoticeCardView
      notice={notice}
      status={status}
      isRead={isRead}
      publishedLabel={publishedLabel}
      accessibilityLabel={accessibilityLabel}
      onPress={handlePress}
    />
  );
};

export const NoticeCardContainer = memo(NoticeCardComponent);

export default NoticeCardContainer;
