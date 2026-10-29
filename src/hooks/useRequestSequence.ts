import { useMemo, useRef } from 'react';

export const useRequestSequence = () => {
  const latestRequestId = useRef(0);

  return useMemo(
    () => ({
      start: () => {
        const requestId = ++latestRequestId.current;
        return () => requestId === latestRequestId.current;
      },
    }),
    [],
  );
};
