import NetInfo from '@react-native-community/netinfo';

import rawData from '@/data/notices.json';

import { ApiError } from './api-errors';
import { mockApiConfig } from './mock-api-config';
import { compareNewestFirst, toNotices } from './notice-mappers';
import type { ListNoticesPayload, Notice, NoticeDto, NoticePage, NoticesApi } from '@/types/notice';

const allNotices: Notice[] = toNotices(rawData.notices as NoticeDto[]).sort(compareNewestFirst);

const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const simulateRequest = async (): Promise<void> => {
  const { minDelayMs, maxDelayMs } = mockApiConfig;
  await wait(minDelayMs + Math.random() * (maxDelayMs - minDelayMs));

  const network = await NetInfo.fetch();
  if (network.isConnected === false) {
    throw new ApiError('offline', 'No network connection');
  }

  if (mockApiConfig.failuresEnabled && Math.random() < mockApiConfig.failureRate) {
    throw new ApiError('server', 'Simulated server error');
  }
};

const isPublished = (notice: Notice): boolean =>
  Date.parse(notice.publishedAt) <= mockApiConfig.now();

export const mockNoticesApi: NoticesApi = {
  async listNotices({ category, page }: ListNoticesPayload): Promise<NoticePage> {
    await simulateRequest();

    const visibleNotices = allNotices.filter(
      (notice) => isPublished(notice) && (category === 'all' || notice.category === category),
    );
    const { pageSize } = mockApiConfig;
    const start = (page - 1) * pageSize;
    const items = visibleNotices.slice(start, start + pageSize);

    return { items, page, hasMore: start + pageSize < visibleNotices.length, total: visibleNotices.length };
  },

  async getNotice(id: string): Promise<Notice> {
    await simulateRequest();

    const notice = allNotices.find((candidate) => candidate.id === id);
    if (!notice || !isPublished(notice)) {
      throw new ApiError('not_found', `Notice ${id} not found`);
    }
    return notice;
  },
};
