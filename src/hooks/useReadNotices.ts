import { useContext } from 'react';

import { ReadNoticesContext, type ReadNoticesValue } from '@/providers';

export const useReadNotices = (): ReadNoticesValue => {
  const value = useContext(ReadNoticesContext);
  if (!value) throw new Error('useReadNotices must be used inside ReadNoticesProvider');
  return value;
};
