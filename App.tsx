import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ReadNoticesProvider } from '@/providers';
import { RootNavigator } from '@/services/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <ReadNoticesProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </ReadNoticesProvider>
    </SafeAreaProvider>
  );
}
