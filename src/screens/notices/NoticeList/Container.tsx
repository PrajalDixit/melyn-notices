import React, { useCallback, useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';

import NoticeCard from '@/components/ui/NoticeCard';
import { useNoticeFeed, useReadNotices } from '@/hooks';
import { describeError } from '@/services/api-services/api-errors';
import NavigationService from '@/services/navigation/navigation-service';
import { ScreenNames } from '@/services/navigation/screen-names';
import { formatTimeAgo } from '@/utilities/dates';
import { Strings } from '@/utilities/strings';
import { TestIds } from '@/utilities/testIds';

import { NoticeListScreenView } from './View';
import type { StateViewProps } from '@/types/components/StateView';
import type { StatusBannerProps } from '@/types/components/StatusBanner';
import type { NoticeFeed } from '@/types/feed';
import type { CategoryFilter, Notice } from '@/types/notice';
import type { NoticeListViewModelState } from '@/types/screens/noticeList';

const buildFeedBanner = (feed: NoticeFeed): StatusBannerProps | null => {
  const updated = feed.syncedAt ? formatTimeAgo(feed.syncedAt) : Strings.noticeList.updatedEarlier;
  const retryAction = { actionLabel: Strings.common.retry, onAction: feed.retry, testID: TestIds.noticeList.banner };

  if (feed.isOffline) {
    return {
      ...retryAction,
      message: Strings.noticeList.offlineBanner(updated),
      isBusy: feed.isCheckingForUpdates || feed.isRefreshing,
    };
  }
  if (feed.refreshError) {
    return { ...retryAction, message: Strings.noticeList.refreshErrorBanner(updated) };
  }
  if (feed.isShowingSaved) {
    return {
      tone: 'info',
      message: Strings.noticeList.savedBanner(updated),
      isBusy: true,
      testID: TestIds.noticeList.banner,
    };
  }
  return null;
};

const buildEmptyState = (feed: NoticeFeed, category: CategoryFilter): StateViewProps | null => {
  const testID = TestIds.noticeList.stateView;

  if (feed.refreshError) {
    return {
      title: Strings.noticeList.loadErrorTitle,
      message: describeError(feed.refreshError),
      actionLabel: Strings.common.tryAgain,
      onAction: feed.retry,
      testID,
    };
  }
  if (feed.isEmpty) {
    return {
      title:
        category === 'all'
          ? Strings.noticeList.emptyAllTitle
          : Strings.noticeList.emptyCategoryTitle(Strings.categories[category]),
      message: Strings.noticeList.emptyMessage,
      testID,
    };
  }
  if (feed.isRefreshing) return null;

  return { isLoading: true, message: Strings.noticeList.loading, testID };
};

export const NoticeListScreenContainer: React.FC = () => {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const feed = useNoticeFeed(category);
  const { readIds } = useReadNotices();

  const handleOpenNotice = useCallback(
    (noticeId: string) => NavigationService.navigateTo(ScreenNames.NoticeDetail, { noticeId }),
    [],
  );

  const renderNoticeItem = useCallback(
    ({ item }: ListRenderItemInfo<Notice>) => (
      <NoticeCard notice={item} isRead={readIds.has(item.id)} onPress={handleOpenNotice} />
    ),
    [readIds, handleOpenNotice],
  );

  const hasItems = feed.items.length > 0;

  const noticeListViewModel: NoticeListViewModelState = {
    category,
    notices: feed.items,
    readIds,
    hasItems,
    isRefreshing: feed.isRefreshing,
    banner: hasItems ? buildFeedBanner(feed) : null,
    emptyState: buildEmptyState(feed, category),
    footer: hasItems
      ? {
          isLoadingMore: feed.isLoadingMore,
          error: feed.loadMoreError,
          hasMore: feed.hasMore,
          isShowingSaved: feed.isShowingSaved,
          onRetry: feed.retryLoadMore,
        }
      : null,
  };

  return (
    <NoticeListScreenView
      state={noticeListViewModel}
      renderNoticeItem={renderNoticeItem}
      onCategoryChange={setCategory}
      onRefresh={feed.refresh}
      onEndReached={feed.loadMore}
    />
  );
};

export default NoticeListScreenContainer;
