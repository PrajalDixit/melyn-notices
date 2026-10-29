import React from 'react';

import { HStack } from '@/components/layout/HStack';
import CustomBadge from '@/components/ui/Badge';

import { badgeRowGap } from './Styles';
import type { NoticeBadgesViewProps } from '@/types/components/NoticeBadges';

export const NoticeBadgesView: React.FC<NoticeBadgesViewProps> = ({ badges }) => (
  <HStack gap={badgeRowGap} shouldWrap>
    {badges.map(({ key, ...badge }) => (
      <CustomBadge key={key} {...badge} />
    ))}
  </HStack>
);
