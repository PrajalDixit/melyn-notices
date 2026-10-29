import React, { useMemo } from 'react';

import { styles } from './Styles';
import { BadgeView } from './View';
import type { CustomBadgeProps } from '@/types/components/Badge';

export const CustomBadge: React.FC<CustomBadgeProps> = ({ label, color, backgroundColor }) => {
  const containerStyle = useMemo(() => [styles.badge, { backgroundColor }], [backgroundColor]);
  const labelStyle = useMemo(() => ({ color }), [color]);

  return <BadgeView label={label} containerStyle={containerStyle} labelStyle={labelStyle} />;
};

export default CustomBadge;
