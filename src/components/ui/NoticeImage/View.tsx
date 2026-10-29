import React from 'react';
import { View } from 'react-native';

import CustomImage from '@/components/ui/Image';
import CustomText from '@/components/ui/Text';
import { Strings } from '@/utilities/strings';

import { styles } from './Styles';
import type { NoticeImageViewProps } from '@/types/components/NoticeImage';

export const NoticeImageView: React.FC<NoticeImageViewProps> = ({ uri, hasFailed, onError }) =>
  hasFailed ? (
    <View style={styles.fallback}>
      <CustomText variant="caption">{Strings.notice.imageLoadFailed}</CustomText>
    </View>
  ) : (
    <CustomImage
      source={{ uri }}
      style={styles.image}
      accessibilityLabel={Strings.notice.imageAccessibilityLabel}
      onError={onError}
    />
  );
