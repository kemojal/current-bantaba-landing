import { useNProgress } from '@tanem/react-nprogress';

import React from 'react';
import LoadingProgress from './LoadingProgress';
import ProgressContainer from './ProgressContainer';

const ProgressBar = ({ isPageRouting }) => {
  const { animationDuration, isFinished, progress } =
    useNProgress(isPageRouting);
  return (
    <ProgressContainer
      animationDuration={animationDuration}
      isFinished={isFinished}
    >
      <LoadingProgress
        animationDuration={animationDuration}
        isFinished={isFinished}
      />
    </ProgressContainer>
  );
};

export default ProgressBar;
