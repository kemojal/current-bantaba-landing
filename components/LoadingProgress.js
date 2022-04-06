import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: red;
  height: 10px;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 50;
  margin-left: ${({ progress }) =>
    progress ? `${(-1 + progress) * 100}%` : '0'};
  transition: ${({ duration }) => `margin-left ${duration}ms linear`};
`;
const LoadingProgress = ({ duration, progress }) => {
  return (
    <Bar progress={progress} duration={duration}>
      LoadingProgress
    </Bar>
  );
};

export default LoadingProgress;
