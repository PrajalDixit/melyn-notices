// Separate from screens.ts to avoid a require cycle.
export const ScreenNames = {
  NoticeList: 'NoticeList',
  NoticeDetail: 'NoticeDetail',
} as const;

export type ScreenName = (typeof ScreenNames)[keyof typeof ScreenNames];
