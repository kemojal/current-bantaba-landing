import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ButtonArrow from './ButtonArrow.';
import { Img } from './Img';

import Fade from 'react-reveal/Fade';

const MobileStartupContainer = styled.div`
background-color: #fcf9e8;
position: relative;
/* &:after {
  position: absolute;
  width: 100%;
  height: 100px;
  content: '';
  background-color: red;
  bottom: 0;

} */

  @media (min-width: 1280px) {
    display: none;
  }
  padding: 2rem 15px;
  /* padding: 0 15px; */
  width: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .device-frame {
    position: relative;
    width: 350px;
   
    height: 416px;


    /* tuned-1 */
    width: 100vw;
    height: 524px;

    /* tuned-2:  */
    /* width: 90vw;
    height: 435px;

    margin-top: 5px; */
  }
  p.title {
    font-size: 26px;
    margin: 10px 0;
    color: rgba(19, 19, 19, 1);
    padding: 0; */

    /* kidas design */
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
    /* font-size: 1rem; */
    /* line-height: 1.5rem; */
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 0.00px;
    line-height: 24px;
  }
  Button {
    margin: 30px 0;
    /* width: calc(100vw - 4rem); */
    box-shadow: 0 0 0 2px #00853b2b, 0 0 0 6px #00000005;
  }
  .join-bt-container {
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;
const MobileStartup = () => {
  return (
    <MobileStartupContainer>
      <p className='spacer title'>
        Why join our African tech startup community?
      </p>

      <div className='device-frame'>
        <Img
          src='mobile-pic-4b.svg'
          alt='logo'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <p className='notosans-bold-licorice-18px spacer why-sub-title'>
        Access diaspora investors, mentors and consultants in one place.
      </p>

      <p className='notosans-normal-licorice-18px normal'>
        A perfect place to build a diaspora community around your startup.
      </p>

      <div className='join-bt-container'>
        <ButtonArrow
          type={'no border'}
          className='join-btn'
          title={'Join as Startup'}
          bgcolor='var(--algae-green)'
          color='var(--licorice)'
          href='https://community.ourbantaba.com/en/register'
        />
      </div>
    </MobileStartupContainer>
  );
};

export default MobileStartup;
