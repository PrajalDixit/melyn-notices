import React from 'react';
import { Pressable, View } from 'react-native';

import { HStack } from '@/components/layout/HStack';
import NoticeBadges from '@/components/ui/NoticeBadges';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { Strings } from '@/utilities/strings';
import { TestIds } from '@/utilities/testIds';

import { rippleConfig, styles } from './Styles';
import type { NoticeCardViewProps } from '@/types/components/NoticeCard';

export const NoticeCardView: React.FC<NoticeCardViewProps> = ({
  notice,
  status,
  isRead,
  publishedLabel,
  accessibilityLabel,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={Strings.notice.cardAccessibilityHint}
    android_ripple={rippleConfig}
    testID={TestIds.noticeCard(notice.id)}
    style={({ pressed }) => [
      styles.card,
      isRead && styles.cardRead,
      status.isUrgent && styles.cardUrgent,
      pressed && styles.pressed,
    ]}
  >
    <HStack gap={spacing.sm} alignItems="flex-start" justifyContent="space-between">
      <NoticeBadges notice={notice} status={status} />
      {!isRead && <View style={styles.unreadDot} />}
    </HStack>

    <CustomText variant={isRead ? 'body' : 'defaultBold'} style={isRead && styles.titleRead} numberOfLines={2}>
      {notice.title}
    </CustomText>

    {notice.body.length > 0 && (
      <CustomText variant="bodySmall" style={styles.preview} numberOfLines={2}>
        {notice.body}
      </CustomText>
    )}

    <CustomText variant="caption" numberOfLines={1}>
      {notice.department} · {publishedLabel}
    </CustomText>
  </Pressable>
);
