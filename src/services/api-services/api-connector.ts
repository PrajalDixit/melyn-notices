import { isAxiosError } from 'axios';

import { AppLogger } from '@/utilities/logger';

import { ApiError } from './api-errors';
import axiosInstance from './axios-instance';
import type { ApiMethod } from './api-constants';

const NOT_FOUND_STATUS = 404;

const handleError = (error: unknown, options?: { suppressErrorLog?: boolean }): ApiError => {
  if (!isAxiosError(error)) {
    return new ApiError('server', error instanceof Error ? error.message : String(error));
  }

  const status = error.response?.status;
  const apiError = !error.response
    ? new ApiError('offline', error.message)
    : status === NOT_FOUND_STATUS
      ? new ApiError('not_found', error.message, status)
      : new ApiError('server', error.message, status);

  if (!options?.suppressErrorLog) {
    AppLogger.error('apiConnector', { url: error.config?.url, status, kind: apiError.kind });
  }
  return apiError;
};

export const apiConnector = async <TResponse>(
  method: ApiMethod,
  endpoint: string,
  data?: object | FormData,
  params?: Record<string, unknown>,
  options?: { suppressErrorLog?: boolean },
): Promise<TResponse> => {
  try {
    const response = await axiosInstance.request<TResponse>({ method, url: endpoint, data, params });
    return response.data;
  } catch (error) {
    throw handleError(error, options);
  }
};
