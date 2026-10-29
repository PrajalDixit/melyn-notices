import React from 'react';
import { ScrollView } from 'react-native';

import CustomButton from '@/components/ui/Button';
import { TestIds } from '@/utilities/testIds';

import { styles } from './Styles';
import type { CategoryFilterBarViewProps } from '@/types/components/CategoryFilterBar';

export const CategoryFilterBarView: React.FC<CategoryFilterBarViewProps> = ({ options, onChange }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    style={styles.bar}
    accessibilityRole="tablist"
  >
    {options.map((option) => (
      <CustomButton
        key={option.value}
        variant="chip"
        title={option.label}
        isSelected={option.isSelected}
        onPress={() => onChange(option.value)}
        accessibilityRole="tab"
        accessibilityState={{ selected: option.isSelected }}
        testID={TestIds.categoryFilter(option.value)}
      />
    ))}
  </ScrollView>
);
