import React from 'react';
import { Img } from '../components/Img';

import styled, { keyframes } from 'styled-components';
import Fade from 'react-reveal/Fade';

const IllustrationContainer = styled.section`
  display: none;
  /* background-color: var(--ottoman); */
  /* background: pink; */
  width: 100vw;
  /* height: 780px; */
  /* overflow: hidden; */
  padding: 0;
  /* margin: 40px 0; */
  position: relative;
  .wheel-phone {
    position: absolute;
    top: 0;
    left: 40px;
  }

  @media (min-width: 600px) {
    width: 50%;
    height: 100%;
    /* padding-top: 80px; */
    /* padding-top: 80px; */
    /* padding-right: 150px; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    /* justify-content:flex-start; */
    /* overflow-x: hidden !important; */
    .wheel-phone {
      position: absolute;
      /* top: 80px;
      left: 0px; */
      top: 124px;
      left: 199px;
    }
  }
`;
const breatheAnimation = keyframes`
0% { transform: rotate(0deg) }
 100% {  transform: rotate(360deg)}
 `;
const ImgSrc = styled.img`
  width: 200%;
  height: auto;
  animation-name: ${breatheAnimation};
  animation-duration: 138s;
  animation-iteration-count: infinite;
  @media (min-width: 600px) {
    width: 654px;
    height: 688px;
    max-height: 658px;
    transform: translateX(-50px);
  }
`;
const ImgContainer = styled.div`
  transform: translate(2%, -4.8%);
  /* transform: translateX(10%); */
`;
const ImgWrapper = styled.div`
  position: relative;
  /* width: 40.875rem;
  height: 43rem; */

  width: 33.875rem;
  height: 44rem;
  /* transform: translateX(15%); */
`;

const Illustration = () => {
  return (
    <IllustrationContainer>
      <Fade bottom>
        <ImgWrapper>
          <Img
            src='right-illustration-img.svg'
            alt='logo'
            layout='fill'
            objectFit='contain'
          />
        </ImgWrapper>
      </Fade>
      {/* <ImgContainer>
        <ImgSrc src='/assets/images/wheel.svg' />
      </ImgContainer>
      <img className='wheel-phone' src='/assets/images/wheel-phone.svg' /> */}
    </IllustrationContainer>

    //
  );
};

export default Illustration;
