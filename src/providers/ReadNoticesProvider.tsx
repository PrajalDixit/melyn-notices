import React, { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import { NoticeStorage } from '@/services/storage';

export interface ReadNoticesValue {
  readIds: ReadonlySet<string>;
  markRead: (id: string) => void;
}

export const ReadNoticesContext = createContext<ReadNoticesValue | null>(null);

export const ReadNoticesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [readIds, setReadIds] = useState<ReadonlySet<string> | null>(null);

  useEffect(() => {
    let isActive = true;
    NoticeStorage.loadReadIds().then((ids) => {
      if (isActive) setReadIds(new Set(ids));
    });
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    if (readIds) void NoticeStorage.saveReadIds([...readIds]);
  }, [readIds]);

  const markRead = useCallback((id: string) => {
    setReadIds((current) => {
      if (!current || current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  }, []);

  const value = useMemo(() => (readIds ? { readIds, markRead } : null), [readIds, markRead]);

  if (!value) return null;

  return <ReadNoticesContext.Provider value={value}>{children}</ReadNoticesContext.Provider>;
};
