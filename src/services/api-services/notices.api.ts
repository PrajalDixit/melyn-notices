import { apiConnector } from './api-connector';
import { apiMethod, endPoints } from './api-constants';
import { ApiError } from './api-errors';
import { toNotice, toNotices } from './notice-mappers';
import type { ListNoticesPayload, NoticeDto, NoticesApi } from '@/types/notice';

export interface NoticeListResponse {
  notices: NoticeDto[];
  page: number;
  has_more: boolean;
  total: number;
}

export const noticesHttpApi: NoticesApi = {
  async listNotices({ category, page }: ListNoticesPayload) {
    const response = await apiConnector<NoticeListResponse>(
      apiMethod.get,
      endPoints.notices.list,
      undefined,
      { category: category === 'all' ? undefined : category, page },
    );
    return {
      items: toNotices(response.notices),
      page: response.page,
      hasMore: response.has_more,
      total: response.total,
    };
  },

  async getNotice(id: string) {
    const dto = await apiConnector<NoticeDto>(apiMethod.get, endPoints.notices.detail(id));
    const notice = toNotice(dto);
    if (!notice) throw new ApiError('not_found', `Notice ${id} is malformed`);
    return notice;
  },
};
