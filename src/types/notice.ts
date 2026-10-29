export const CATEGORIES = ['emergency', 'event', 'service', 'general'] as const;

export type Category = (typeof CATEGORIES)[number];
export type CategoryFilter = Category | 'all';
export type Priority = 'normal' | 'high';

export interface Notice {
  id: string;
  title: string;
  body: string;
  category: Category;
  priority: Priority;
  department: string;
  publishedAt: string;
  expiresAt: string | null;
  imageUrl: string | null;
}

export interface NoticeStatus {
  isExpired: boolean;
  isUrgent: boolean;
}

export interface NoticeDto {
  id: string;
  title: string;
  body: string | null;
  category: string;
  priority: string;
  department: string | null;
  published_at: string;
  expires_at: string | null;
  image_url: string | null;
}

export interface NoticePage {
  items: Notice[];
  page: number;
  hasMore: boolean;
  total: number;
}

export interface ListNoticesPayload {
  category: CategoryFilter;
  page: number;
}

export interface NoticesApi {
  listNotices(payload: ListNoticesPayload): Promise<NoticePage>;
  getNotice(id: string): Promise<Notice>;
}
