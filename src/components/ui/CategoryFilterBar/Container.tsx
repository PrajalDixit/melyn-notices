import React, { useMemo } from 'react';

import { CATEGORIES, type CategoryFilter } from '@/types/notice';
import { Strings } from '@/utilities/strings';

import { CategoryFilterBarView } from './View';
import type { CategoryFilterBarProps } from '@/types/components/CategoryFilterBar';

const FILTERS: CategoryFilter[] = ['all', ...CATEGORIES];

export const CategoryFilterBarContainer: React.FC<CategoryFilterBarProps> = ({ value, onChange }) => {
  const options = useMemo(
    () =>
      FILTERS.map((filter) => ({
        value: filter,
        label: Strings.categories[filter],
        isSelected: filter === value,
      })),
    [value],
  );

  return <CategoryFilterBarView options={options} onChange={onChange} />;
};

export default CategoryFilterBarContainer;
