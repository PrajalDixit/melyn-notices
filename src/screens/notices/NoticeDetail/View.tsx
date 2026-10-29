import React from 'react';
import { ScrollView, View } from 'react-native';

import ScreenSafeArea from '@/components/layout/ScreenSafeArea';
import { VStack } from '@/components/layout/VStack';
import NoticeBadges from '@/components/ui/NoticeBadges';
import NoticeImage from '@/components/ui/NoticeImage';
import StateView from '@/components/ui/StateView';
import StatusBanner from '@/components/ui/StatusBanner';
import CustomText from '@/components/ui/Text';
import { spacing } from '@/utilities/constants/responsive-theme';
import { TestIds } from '@/utilities/testIds';

import { styles } from './Styles';
import type { NoticeDetailScreenViewProps } from '@/types/screens/noticeDetail';

export const NoticeDetailScreenView: React.FC<NoticeDetailScreenViewProps> = ({
  state: { content, placeholder, banner },
}) => (
  <ScreenSafeArea disableTopSpace style={styles.screen} testID={TestIds.noticeDetail.screen}>
    {!content ? (
      <StateView {...placeholder} />
    ) : (
      <>
        {banner && <StatusBanner {...banner} />}

        <ScrollView contentContainerStyle={styles.content}>
          <NoticeBadges notice={content.notice} status={content.status} />

          <CustomText variant="heading" accessibilityRole="header" selectable testID={TestIds.noticeDetail.title}>
            {content.notice.title}
          </CustomText>

          <VStack gap={spacing.xs}>
            <CustomText variant="defaultSemiBold">{content.notice.department}</CustomText>
            <CustomText variant="bodySmall">{content.publishedLabel}</CustomText>
            {content.validUntilLabel && <CustomText variant="bodySmall">{content.validUntilLabel}</CustomText>}
          </VStack>

          {content.expiredWarning && (
            <View style={styles.expiredCallout}>
              <CustomText variant="bodySmall" style={styles.expiredText}>
                {content.expiredWarning}
              </CustomText>
            </View>
          )}

          {content.notice.imageUrl && <NoticeImage uri={content.notice.imageUrl} />}

          {content.notice.body ? (
            <CustomText variant="body" selectable>
              {content.notice.body}
            </CustomText>
          ) : (
            <CustomText variant="body" style={styles.emptyBody}>
              {content.emptyBodyMessage}
            </CustomText>
          )}
        </ScrollView>
      </>
    )}
  </ScreenSafeArea>
);
