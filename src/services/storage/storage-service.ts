import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppLogger } from '@/utilities/logger';

import type { StorageKey } from './storage-keys';

export const StorageService = {
  setItem: async (key: StorageKey, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
      AppLogger.debug('StorageService.setItem', { key });
    } catch (error) {
      AppLogger.error('StorageService.setItem', { key, error });
    }
  },

  getItem: async (key: StorageKey): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      AppLogger.debug('StorageService.getItem', { key, found: value !== null });
      return value;
    } catch (error) {
      AppLogger.error('StorageService.getItem', { key, error });
      return null;
    }
  },

  setObject: async <T>(key: StorageKey, value: T): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      AppLogger.debug('StorageService.setObject', { key });
    } catch (error) {
      AppLogger.error('StorageService.setObject', { key, error });
    }
  },

  getObject: async (key: StorageKey): Promise<unknown> => {
    try {
      const raw = await AsyncStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw) as unknown;
    } catch (error) {
      AppLogger.error('StorageService.getObject', { key, error });
      return null;
    }
  },

  removeItem: async (key: StorageKey): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      AppLogger.debug('StorageService.removeItem', { key });
    } catch (error) {
      AppLogger.error('StorageService.removeItem', { key, error });
    }
  },

  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
      AppLogger.warn('StorageService.clear', 'All storage cleared');
    } catch (error) {
      AppLogger.error('StorageService.clear', error);
    }
  },
};
