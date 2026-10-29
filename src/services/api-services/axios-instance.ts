import { create } from 'axios';

import { AppLogger } from '@/utilities/logger';

import { API_BASE_URL, API_TIMEOUT_MS } from './api-constants';

const axiosInstance = create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
});

axiosInstance.interceptors.request.use((config) => {
  if (!(config.data instanceof FormData)) {
    config.headers.set('Content-Type', 'application/json');
  }
  AppLogger.info('axiosInstance.request', { method: config.method, url: config.url });
  return config;
});

export default axiosInstance;
