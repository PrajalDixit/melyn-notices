import { useCallback, useEffect, useState } from 'react';

import { noticesApi, toApiError, type ApiError } from '@/services/api-services';
import { NoticeMemoryCache } from '@/services/cache/notice-memory-cache';
import { AppLogger } from '@/utilities/logger';
import type { Notice } from '@/types/notice';

import { useOnReconnect } from './useNetworkStatus';
import { useRequestSequence } from './useRequestSequence';

export const useNotice = (id: string) => {
  const [notice, setNotice] = useState<Notice | null>(() => NoticeMemoryCache.get(id) ?? null);
  const [error, setError] = useState<ApiError | null>(null);
  const requestSequence = useRequestSequence();

  const fetchNotice = useCallback(() => {
    const isLatest = requestSequence.start();
    return noticesApi.getNotice(id).then(
      (freshNotice) => {
        if (!isLatest()) return;
        NoticeMemoryCache.remember([freshNotice]);
        setNotice(freshNotice);
        setError(null);
      },
      (caught: unknown) => {
        if (!isLatest()) return;
        const apiError = toApiError(caught);
        AppLogger.warn('useNotice.fetchNotice', { id, kind: apiError.kind });
        if (apiError.kind === 'not_found') setNotice(null);
        setError(apiError);
      },
    );
  }, [id, requestSequence]);

  useEffect(() => {
    void fetchNotice();
  }, [fetchNotice]);

  const retry = useCallback(() => {
    setError(null);
    void fetchNotice();
  }, [fetchNotice]);

  const isOffline = useOnReconnect(() => {
    if (error && error.kind !== 'not_found') retry();
  });

  return { notice, error, isOffline, retry };
};
