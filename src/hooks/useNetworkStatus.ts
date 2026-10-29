import { useEffect, useRef } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

export const useIsOffline = (): boolean => useNetInfo().isConnected === false;

export const useOnReconnect = (onReconnect: () => void): boolean => {
  const isOffline = useIsOffline();
  const wasOffline = useRef(isOffline);
  const callback = useRef(onReconnect);

  useEffect(() => {
    callback.current = onReconnect;
  });

  useEffect(() => {
    if (wasOffline.current && !isOffline) callback.current();
    wasOffline.current = isOffline;
  }, [isOffline]);

  return isOffline;
};
