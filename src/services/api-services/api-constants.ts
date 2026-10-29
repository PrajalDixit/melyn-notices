export const endPoints = {
  notices: {
    list: '/notices',
    detail: (id: string) => `/notices/${encodeURIComponent(id)}`,
  },
} as const;

export const apiMethod = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
} as const;

export type ApiMethod = (typeof apiMethod)[keyof typeof apiMethod];

export const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || '';
export const API_TIMEOUT_MS = 10_000;
