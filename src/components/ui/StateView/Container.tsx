import React from 'react';

import { StateViewView } from './View';
import type { StateViewProps } from '@/types/components/StateView';

export const StateViewContainer: React.FC<StateViewProps> = (props) => (
  <StateViewView {...props} hasAction={!!props.actionLabel && !!props.onAction} />
);

export default StateViewContainer;
