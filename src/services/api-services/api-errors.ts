import { Strings } from '@/utilities/strings';

export type ApiErrorKind = 'offline' | 'server' | 'not_found';

export class ApiError extends Error {
  readonly kind: ApiErrorKind;
  readonly status?: number;

  constructor(kind: ApiErrorKind, message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.kind = kind;
    this.status = status;
  }
}

export const toApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) return error;
  const message = error instanceof Error ? error.message : String(error);
  return new ApiError('server', message);
};

export const describeError = (error: ApiError): string => {
  switch (error.kind) {
    case 'offline':
      return Strings.errors.offline;
    case 'not_found':
      return Strings.errors.notFound;
    case 'server':
      return Strings.errors.server;
  }
};
