import React, { useRef } from 'react';
import styled from 'styled-components';
import { Img } from './Img';
import WhyFunction from './WhyFunction';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import ButtonArrow from './ButtonArrow.';

import Fade from 'react-reveal/Fade';

const DesktopStartupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .left-section {
    display: none;
  }
  @media (min-width: 1280px) {
    padding-bottom: 126px;
    p.why-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 130%;
      text-align: left;
      color: #011108;
      width: 100%;
      margin-bottom: 2rem;
    }
    .left-section {
      width: 45%;
      min-height: 658px;
      /* height: 950px; */
      /* padding-right: 150px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding-top: 150px; */
    }
    .device-frame2 {
      position: relative;
      width: 538px;
      height: 452px;
      margin-left: 100px;
    }
    .why-list-container {
      padding: 10px 0;
    }

    .join-bt-container {
      width: 80%;
    }
    .join-btn {
      width: 200px !important;
    }
  }
  @media (min-width: 1500px) {
    .left-section {
      padding: 0 50px;
      padding-left: 0px;
    }
  }
`;
const whyDiaspora = [
  {
    text: 'Access investors',
    subText:
      'It is free & easy to seek funding on Bantaba. Simply sign-up to connect with diaspora angels looking to invest in African startups.',
    src: 'why-d1.svg',
  },
  {
    text: 'Mentorship & consultancy',
    subText:
      'Receive mentorship & support from an extensive list of diaspora experts from across the globe',
    src: 'why-d2.svg',
  },
  {
    text: 'Career opportunities',
    subText:
      'Build a strong network for your startup and gain visibility in the diaspora community.',
    src: 'why-d3.svg',
  },
];

const DestopLeftIllustration = styled.div`
  display: none;
  @media (min-width: 1280px) {
    align-items: center;
    display: flex !important;
    width: 55%;
    height: 100%;
    display: flex;
    z-index: 10;
    position: relative;
    /* background-color: brown; */
    margin-top: 170px;

    &::before {
      content: '';
      position: absolute;
      /* width: 973.96px;
      height: 956.06px; */

      /* right: -260px; */
      /* right: -372px; */

      width: 835.96px;
      height: 870.06px;
      right: -300px;
      background: url('/assets/images/why-startup.svg') no-repeat;
      background-size: 100% 100%;
    }
  }
`;

const DesktopDiaspora = () => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const fadeOut = {
    opacity: 0,
    y: 100,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;
  return (
    <DesktopStartupContainer ref={myRef}>
      <div className='left-section'>
        <Fade bottom>
          <p className='why-title'>
            Why you should join our diaspora community?
          </p>
        </Fade>
        <ul className='why-list-container'>
          {whyDiaspora.map((item, index) => {
            let borderType = index === whyDiaspora.length - 1 ? false : true;

            return (
              <li key={index}>
                <Fade bottom>
                  <WhyFunction {...item} borderType={borderType} />
                </Fade>
              </li>
            );
          })}
        </ul>
        <Fade bottom>
          <div className='join-bt-container'>
            <ButtonArrow
              maxWidth='218.2px'
              className='join-btn'
              title={'Join as Startup'}
              bgcolor='transparent'
              color='#009743'
              href={'https://community.ourbantaba.com/en/register'}
            />
          </div>
        </Fade>
      </div>
      <DestopLeftIllustration>
        <Fade bottom>
          <div className='device-frame2'>
            <Img
              src='startup-device.png'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Fade>
      </DestopLeftIllustration>
    </DesktopStartupContainer>
  );
};

export default DesktopDiaspora;
