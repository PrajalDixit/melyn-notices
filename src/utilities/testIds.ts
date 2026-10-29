export const TestIds = {
  noticeList: {
    screen: 'notice-list-screen',
    list: 'notice-list',
    banner: 'notice-list-banner',
    stateView: 'notice-list-state',
    footer: 'notice-list-footer',
  },
  noticeDetail: {
    screen: 'notice-detail-screen',
    title: 'notice-detail-title',
    banner: 'notice-detail-banner',
    stateView: 'notice-detail-state',
  },
  noticeCard: (id: string) => `notice-card-${id}`,
  categoryFilter: (category: string) => `category-filter-${category}`,
  stateViewAction: 'state-view-action',
  feedFooterRetry: 'feed-footer-retry',
  devFailureToggle: 'dev-failure-toggle',
} as const;
