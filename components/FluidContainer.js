import React from 'react';
import styled from 'styled-components';

const FluidContainer = styled.div`
  width: 100vw;
  @media (min-width: 1280px) {
    max-width: 1200px;
    display: flex;
    flex-direction: ${({ flipColumn }) => (flipColumn? flipColumn : 'column')};;
    align-items: center;
    justify-content: center;
    /* flex-direction: row; */
    padding: 40px 0;
    
  }
`;

export { FluidContainer };
// export const FluidContainer = ({ children }) => {
//   return <FluidContainer>{children}</FluidContainer>;
// };
