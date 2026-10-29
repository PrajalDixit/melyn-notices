import React, { useCallback, useState } from 'react';

import { mockApiConfig } from '@/services/api-services/mock-api-config';

import { DevFailureToggleView } from './View';

export const DevFailureToggleContainer: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(mockApiConfig.failuresEnabled);

  const handleToggle = useCallback((value: boolean) => {
    mockApiConfig.failuresEnabled = value;
    setIsEnabled(value);
  }, []);

  return <DevFailureToggleView isEnabled={isEnabled} onToggle={handleToggle} />;
};

export default DevFailureToggleContainer;
