import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { navigationRef } from '@/services/navigation/navigation-service';
import { Colors } from '@/utilities/constants/colors';

import { ScreenNames, type ScreenName } from './screen-names';
import { screens } from './screens';

type ScreenParamOverrides = {
  [ScreenNames.NoticeDetail]: { noticeId: string };
};

export type RootStackParamList = {
  [Key in ScreenName]: Key extends keyof ScreenParamOverrides ? ScreenParamOverrides[Key] : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTransparent: false, // iOS 26 defaults to a transparent header
  headerStyle: { backgroundColor: Colors.backgroundSurface },
  headerTintColor: Colors.primary,
  headerTitleStyle: { color: Colors.textPrimary },
  contentStyle: { backgroundColor: Colors.background },
};

export const RootNavigator: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName={ScreenNames.NoticeList} screenOptions={screenOptions}>
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
