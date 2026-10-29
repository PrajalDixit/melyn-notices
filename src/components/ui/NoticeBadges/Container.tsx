import React, { useMemo } from 'react';

import { Colors } from '@/utilities/constants/colors';
import { getNoticeStatus } from '@/utilities/noticeStatus';
import { Strings } from '@/utilities/strings';

import { NoticeBadgesView } from './View';
import type { NoticeBadgeItem, NoticeBadgesProps } from '@/types/components/NoticeBadges';

export const NoticeBadgesContainer: React.FC<NoticeBadgesProps> = ({ notice, status, shouldShowCategory = true }) => {
  const badges = useMemo(() => {
    const { isExpired, isUrgent } = status ?? getNoticeStatus(notice);
    const items: NoticeBadgeItem[] = [];
    if (shouldShowCategory) {
      items.push({
        key: 'category',
        label: Strings.categories[notice.category],
        color: Colors.primary,
        backgroundColor: Colors.primaryLight,
      });
    }
    if (isUrgent) {
      items.push({
        key: 'urgent',
        label: Strings.notice.highPriority,
        color: Colors.white,
        backgroundColor: Colors.urgentRed,
      });
    }
    if (isExpired) {
      items.push({
        key: 'expired',
        label: Strings.notice.expired,
        color: Colors.textMuted,
        backgroundColor: Colors.backgroundNeutral,
      });
    }
    return items;
  }, [notice, status, shouldShowCategory]);

  return <NoticeBadgesView badges={badges} />;
};

export default NoticeBadgesContainer;
