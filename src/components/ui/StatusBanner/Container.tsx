import React, { useMemo } from 'react';

import { styles, toneColors } from './Styles';
import { StatusBannerView } from './View';
import type { StatusBannerProps } from '@/types/components/StatusBanner';

export const StatusBannerContainer: React.FC<StatusBannerProps> = ({
  message,
  tone = 'warning',
  isBusy = false,
  actionLabel,
  onAction,
  testID,
}) => {
  const toneColor = toneColors[tone];
  const containerStyle = useMemo(
    () => [styles.banner, tone === 'warning' ? styles.warningBanner : styles.infoBanner],
    [tone],
  );
  const toneTextStyle = useMemo(() => ({ color: toneColor }), [toneColor]);

  return (
    <StatusBannerView
      message={message}
      isBusy={isBusy}
      actionLabel={actionLabel}
      onAction={onAction}
      toneColor={toneColor}
      containerStyle={containerStyle}
      toneTextStyle={toneTextStyle}
      testID={testID}
    />
  );
};

export default StatusBannerContainer;
