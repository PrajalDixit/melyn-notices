export const Strings = {
  navigation: {
    noticeListTitle: 'Community Notices',
    noticeDetailTitle: 'Notice',
    noticeDetailBackTitle: 'Notices',
  },
  categories: {
    all: 'All',
    emergency: 'Emergency',
    event: 'Event',
    service: 'Service',
    general: 'General',
  },
  common: {
    loading: 'Loading…',
    retry: 'Retry',
    tryAgain: 'Try again',
  },
  errors: {
    offline: "You're offline. Check your connection and try again.",
    notFound: 'This notice is no longer available.',
    server: 'Something went wrong while loading notices. Please try again.',
  },
  dates: {
    unknown: 'Unknown date',
    justNow: 'just now',
    minutesAgo: (minutes: number) => `${minutes} min ago`,
    hoursAgo: (hours: number) => `${hours} h ago`,
    onDate: (date: string) => `on ${date}`,
  },
  notice: {
    defaultDepartment: 'Community',
    highPriority: 'High priority',
    expired: 'Expired',
    unread: 'Unread',
    cardAccessibilityHint: 'Opens the notice',
    imageAccessibilityLabel: 'Notice image',
    imageLoadFailed: "Image couldn't be loaded",
  },
  noticeList: {
    loading: 'Loading notices…',
    loadErrorTitle: "Couldn't load notices",
    emptyAllTitle: 'No notices yet',
    emptyCategoryTitle: (categoryLabel: string) => `No ${categoryLabel.toLowerCase()} notices`,
    emptyMessage: 'New notices from your community will show up here. Pull down to check again.',
    updatedEarlier: 'earlier',
    offlineBanner: (updated: string) =>
      `You're offline. Showing notices last updated ${updated}; they may be out of date.`,
    refreshErrorBanner: (updated: string) =>
      `Couldn't update notices. Showing notices last updated ${updated}; they may be out of date.`,
    savedBanner: (updated: string) => `Showing saved notices from ${updated}. Checking for updates…`,
    loadMoreError: (reason: string) => `Couldn't load more notices. ${reason}`,
    waitingForServer: 'Older notices will load once we can reach the server.',
    caughtUp: "You're all caught up.",
  },
  noticeDetail: {
    loading: 'Loading notice…',
    notFoundTitle: 'Notice not available',
    notFoundMessage: 'It may have been removed or is not published yet.',
    backToNotices: 'Back to notices',
    loadErrorTitle: "Couldn't load this notice",
    offlineBanner: "You're offline. This notice may not be the latest version.",
    refreshErrorBanner: "Couldn't refresh this notice. It may be out of date.",
    published: (date: string) => `Published ${date}`,
    validUntil: (date: string) => `Valid until ${date}`,
    expiredWarning: (date: string) =>
      `This notice expired on ${date}. The information may no longer apply.`,
    emptyBody: (department: string) =>
      `No further details were provided. Contact ${department} if you have questions.`,
  },
  devTools: {
    failureToggleAccessibilityLabel: 'Simulated failures',
    failureToggleLabel: 'Failures',
  },
} as const;
