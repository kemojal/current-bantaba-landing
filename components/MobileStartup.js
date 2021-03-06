import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import { Button } from './Button';
import ButtonArrow from './ButtonArrow.';
import { Img } from './Img';

import Fade from 'react-reveal/Fade';

const MobileStartupContainer = styled.div`
background-color: #fcf9e8;
position: relative;

  @media (min-width: 1280px) {
    display: none;
  }
  padding: 2rem 15px;
  width: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .device-frame {
    position: relative;
    width: 100vw;
    height: 524px;
  }
  p.title {
    font-size: 26px;
    margin: 10px 0;
    color: rgba(19, 19, 19, 1);
    padding: 0; */

   
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.00px;
    line-height: 30px;
    text-align: center;
  }
  p.why-sub-title{
    letter-spacing: 0.00px;
    line-height: 24px;
    text-align: center;
    padding-top: 20px;

  }
  .spacer {
    margin-bottom: 30px;
  }
  .space-top {
    margin-top: 40px;
  }
  p.normal {
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 0.00px;
    line-height: 24px;
  }
  Button {
    margin: 30px 0;
    box-shadow: 0 0 0 2px #00853b2b, 0 0 0 6px #00000005;
  }
  .join-bt-container {
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;
const MobileStartup = ({ lang }) => {
  const { currentLanguage } = useContext(GlobalContext);
  return (
    <MobileStartupContainer>
      <p className='spacer title'>{lang.why_join_startup}</p>

      <div className='device-frame'>
        <Img
          src='mobile-pic-3b.svg'
          alt='logo'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <p className='notosans-bold-licorice-18px spacer why-sub-title'>
        {lang.access_investor_mobile}
      </p>

      <p className='notosans-normal-licorice-18px normal'>
        {lang.a_perfect_place_mobile}
      </p>

      <div className='join-bt-container'>
        <ButtonArrow
          type={'no border'}
          className='join-btn'
          title={lang.join_as_startup}
          bgcolor='var(--algae-green)'
          color='var(--licorice)'
          href={`https://community.ourbantaba.com/${currentLanguage}/register`}
          width={currentLanguage === 'en' ? '218.2px' : '300px'}
        />
      </div>
    </MobileStartupContainer>
  );
};

export default MobileStartup;
