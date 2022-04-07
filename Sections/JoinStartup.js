import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Button } from '../components/Button';
import { Img } from '../components/Img';
import MobileStartup from '../components/MobileStartup';
import DesktopDiaspora from '../components/DesktopDiaspora';

const WhySection = styled.section`
  background-color: #fcf9e8;
  background-color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    position: relative;
    padding: 140px 0;
    padding-bottom: 0px;
    .container {
      /* max-width: 1200px; */
      /* max-width: calc(100% - 300px); */
      /* background-color: orange; */
      max-width: var(--max-width);
    }
    /* .right-section {
      padding: 0 50px;
    } */
  }
`;
export const JoinStartup = ({ lang }) => {
  return (
    <WhySection>
      <div className='container'>
        <MobileStartup lang={lang} />
        <DesktopDiaspora lang={lang} />
      </div>
    </WhySection>
  );
};
