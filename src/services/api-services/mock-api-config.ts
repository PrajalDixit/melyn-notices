export const mockApiConfig = {
  failuresEnabled: true,
  failureRate: 0.2,
  minDelayMs: 400,
  maxDelayMs: 1000,
  pageSize: 10,
  now: (): number => Date.now(),
};
