import { API_BASE_URL } from './api-constants';
import { mockNoticesApi } from './mock-notices.api';
import { noticesHttpApi } from './notices.api';
import type { NoticesApi } from '@/types/notice';

export const noticesApi: NoticesApi = API_BASE_URL ? noticesHttpApi : mockNoticesApi;

export { apiConnector } from './api-connector';
export { apiMethod, endPoints } from './api-constants';
export { ApiError, describeError, toApiError } from './api-errors';
export { mockApiConfig } from './mock-api-config';
