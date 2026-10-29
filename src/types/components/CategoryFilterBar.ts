import type { CategoryFilter } from '@/types/notice';

export interface CategoryFilterBarProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export interface CategoryFilterOption {
  value: CategoryFilter;
  label: string;
  isSelected: boolean;
}

export interface CategoryFilterBarViewProps {
  options: CategoryFilterOption[];
  onChange: (value: CategoryFilter) => void;
}
