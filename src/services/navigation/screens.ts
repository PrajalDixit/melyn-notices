import React from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import DevFailureToggle from '@/components/ui/DevFailureToggle';
import { NoticeDetailScreen } from '@/screens/notices/NoticeDetail';
import { NoticeListScreen } from '@/screens/notices/NoticeList';
import { Strings } from '@/utilities/strings';

import { ScreenNames, type ScreenName } from './screen-names';

export { ScreenNames };
export type { ScreenName };

export const screens: {
  name: ScreenName;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}[] = [
  {
    name: ScreenNames.NoticeList,
    component: NoticeListScreen,
    options: {
      title: Strings.navigation.noticeListTitle,
      headerRight: __DEV__ ? () => React.createElement(DevFailureToggle) : undefined,
    },
  },
  {
    name: ScreenNames.NoticeDetail,
    component: NoticeDetailScreen,
    options: {
      title: Strings.navigation.noticeDetailTitle,
      headerBackTitle: Strings.navigation.noticeDetailBackTitle,
    },
  },
];
