import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';

import ScreenSafeArea from '@/components/layout/ScreenSafeArea';
import CategoryFilterBar from '@/components/ui/CategoryFilterBar';
import FeedFooter from '@/components/ui/FeedFooter';
import StateView from '@/components/ui/StateView';
import StatusBanner from '@/components/ui/StatusBanner';
import { listThresholds } from '@/utilities/numerics';
import { TestIds } from '@/utilities/testIds';

import { refreshColors, styles } from './Styles';
import type { Notice } from '@/types/notice';
import type { NoticeListScreenViewProps } from '@/types/screens/noticeList';

const keyExtractor = (notice: Notice) => notice.id;

const ListSeparator: React.FC = () => <View style={styles.separator} />;

export const NoticeListScreenView: React.FC<NoticeListScreenViewProps> = ({
  state,
  renderNoticeItem,
  onCategoryChange,
  onRefresh,
  onEndReached,
}) => (
  <ScreenSafeArea disableTopSpace testID={TestIds.noticeList.screen}>
    <CategoryFilterBar value={state.category} onChange={onCategoryChange} />
    {state.banner && <StatusBanner {...state.banner} />}

    <FlatList
      key={state.category}
      testID={TestIds.noticeList.list}
      data={state.notices}
      keyExtractor={keyExtractor}
      renderItem={renderNoticeItem}
      extraData={state.readIds}
      ItemSeparatorComponent={ListSeparator}
      contentContainerStyle={[styles.listContent, !state.hasItems && styles.listContentEmpty]}
      onEndReached={onEndReached}
      onEndReachedThreshold={listThresholds.endReached}
      refreshControl={
        <RefreshControl
          refreshing={state.isRefreshing}
          onRefresh={onRefresh}
          tintColor={refreshColors.tint}
          colors={refreshColors.android}
        />
      }
      ListEmptyComponent={state.emptyState ? <StateView {...state.emptyState} /> : undefined}
      ListFooterComponent={state.footer ? <FeedFooter {...state.footer} /> : undefined}
    />
  </ScreenSafeArea>
);
