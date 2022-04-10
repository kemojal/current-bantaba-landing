import React from 'react';
import { Img } from '../components/Img';

import styled, { keyframes } from 'styled-components';

const IllustrationContainer = styled.section`
  display: none;

  width: 100vw;

  padding: 0;

  position: relative;
  .wheel-phone {
    position: absolute;
    top: 0;
    left: 40px;
  }

  @media (min-width: 600px) {
    width: 50%;
    height: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .wheel-phone {
      position: absolute;

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
`;
const ImgWrapper = styled.div`
  position: relative;

  width: 33.875rem;
  height: 44rem;
`;

const Illustration = () => {
  // src='right-illustration-img.svg'
  return (
    <IllustrationContainer>
      <ImgWrapper>
        <Img
          src='right-illustration-img-optimized.png'
          alt='logo'
          layout='fill'
          objectFit='contain'
          priority={true}
        />
      </ImgWrapper>
    </IllustrationContainer>

    //
  );
};

export default Illustration;
