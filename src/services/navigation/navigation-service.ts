import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

import { AppLogger } from '@/utilities/logger';

import type { RootStackParamList } from './RootNavigator';
import type { ScreenName } from './screen-names';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type NavigationArgs<Name extends ScreenName> = undefined extends RootStackParamList[Name]
  ? [screen: Name, params?: RootStackParamList[Name]]
  : [screen: Name, params: RootStackParamList[Name]];

let rootTabOrigin: ScreenName | null = null;

const isReady = (action: string): boolean => {
  if (navigationRef.isReady()) return true;
  AppLogger.warn(`NavigationService.${action}`, 'Navigation container is not ready');
  return false;
};

const NavigationService = {
  navigateTo: <Name extends ScreenName>(...[screen, params]: NavigationArgs<Name>) => {
    if (!isReady('navigateTo')) return;
    AppLogger.info('NavigationService.navigateTo', { screen });
    navigationRef.dispatch(CommonActions.navigate(screen, params));
  },

  replaceRoute: <Name extends ScreenName>(...[screen, params]: NavigationArgs<Name>) => {
    if (!isReady('replaceRoute')) return;
    AppLogger.info('NavigationService.replaceRoute', { screen });
    navigationRef.dispatch(StackActions.replace(screen, params));
  },

  pushRoute: <Name extends ScreenName>(...[screen, params]: NavigationArgs<Name>) => {
    if (!isReady('pushRoute')) return;
    AppLogger.info('NavigationService.pushRoute', { screen });
    navigationRef.dispatch(StackActions.push(screen, params));
  },

  goBack: () => {
    if (isReady('goBack') && navigationRef.canGoBack()) navigationRef.goBack();
  },

  canGoBack: (): boolean => navigationRef.isReady() && navigationRef.canGoBack(),

  pushRootTab: (tab: ScreenName) => {
    rootTabOrigin = tab;
  },

  popRootTab: () => {
    if (!rootTabOrigin) return;
    const tab = rootTabOrigin;
    rootTabOrigin = null;
    if (isReady('popRootTab')) navigationRef.dispatch(StackActions.replace(tab));
  },
};

export default NavigationService;
