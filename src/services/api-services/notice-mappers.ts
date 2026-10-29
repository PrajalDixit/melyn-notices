import { CATEGORIES, type Category, type Notice, type NoticeDto } from '@/types/notice';
import { Strings } from '@/utilities/strings';

const isCategory = (value: string): value is Category =>
  (CATEGORIES as readonly string[]).includes(value);

const validIsoOrNull = (value: string | null): string | null => {
  if (!value) return null;
  return Number.isNaN(Date.parse(value)) ? null : value;
};

export const toNotice = (dto: NoticeDto): Notice | null => {
  const publishedAt = validIsoOrNull(dto.published_at);
  const title = dto.title?.trim();
  if (!dto.id || !title || !publishedAt) return null;

  return {
    id: dto.id,
    title,
    body: dto.body?.trim() ?? '',
    category: isCategory(dto.category) ? dto.category : 'general',
    priority: dto.priority === 'high' ? 'high' : 'normal',
    department: dto.department?.trim() || Strings.notice.defaultDepartment,
    publishedAt,
    expiresAt: validIsoOrNull(dto.expires_at),
    imageUrl: dto.image_url?.trim() || null,
  };
};

export const toNotices = (dtos: NoticeDto[]): Notice[] =>
  dtos.map(toNotice).filter((notice): notice is Notice => notice !== null);

export const compareNewestFirst = (first: Notice, second: Notice): number => {
  const diff = Date.parse(second.publishedAt) - Date.parse(first.publishedAt);
  if (diff !== 0) return diff;
  return second.id.localeCompare(first.id);
};
