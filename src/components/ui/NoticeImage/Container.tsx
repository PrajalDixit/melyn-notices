import React, { useCallback, useState } from 'react';

import { NoticeImageView } from './View';
import type { NoticeImageProps } from '@/types/components/NoticeImage';

export const NoticeImageContainer: React.FC<NoticeImageProps> = ({ uri }) => {
  const [failedUri, setFailedUri] = useState<string | null>(null);
  const handleError = useCallback(() => setFailedUri(uri), [uri]);

  return <NoticeImageView uri={uri} hasFailed={failedUri === uri} onError={handleError} />;
};

export default NoticeImageContainer;
