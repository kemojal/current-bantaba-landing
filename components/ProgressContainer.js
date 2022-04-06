import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  pointer-events: none;
  opacity: ${({ isFinished }) => (isFinished ? '0' : '1')};
  transition: ${({ duration }) => `opacity ${duration}ms linear`};
`;
const ProgressContainer = ({ duration, children, isFinished }) => {
  return (
    <BarContainer duration={duration} isFinished={isFinished}>
      {children}
    </BarContainer>
  );
};

export default ProgressContainer;
