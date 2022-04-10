import React, { useContext } from 'react';
import styled from 'styled-components';
import { Img } from './Img';
import WhyFunction from './WhyFunction';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import ButtonArrow from './ButtonArrow.';

import { GlobalContext } from '../context/GlobalState';

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
      font-size: 38px;
      line-height: 130%;
      text-align: left;
      color: #011108;
      width: 100%;
      margin-bottom: 2rem;
    }
    .left-section {
      width: 50%;
      min-height: 658px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
      padding: 0 0px;
      padding-left: 0px;
    }
  }
`;

const DestopLeftIllustration = styled.div`
  display: none;
  @media (min-width: 1280px) {
    align-items: center;
    display: flex !important;
    width: 50%;
    height: 100%;
    display: flex;
    z-index: 10;
    position: relative;
    margin-top: 170px;

    &::before {
      content: '';
      position: absolute;

      width: 835.96px;
      height: 870.06px;
      right: -300px;
      background: url('/assets/images/why-startup.svg') no-repeat;
      background-size: 100% 100%;
    }
  }
`;

const DesktopDiaspora = ({ lang }) => {
  const { currentLanguage } = useContext(GlobalContext);
  const whyDiaspora = [
    {
      text: lang.access_investors_desktop,
      subText: lang.access_investors_subtext_desktop,
      src: 'why-s1a.svg',
    },
    {
      text: lang.mentorship_consultancy_desktop,
      subText: lang.mentorship_consultancy_subtext_desktop,
      src: 'why-s2a.svg',
    },
    {
      text: lang.build_a_network_desktop,
      subText: lang.build_a_network_subtext_desktop,
      src: 'why-s3a.svg',
    },
  ];
  return (
    <DesktopStartupContainer>
      <div className='left-section'>
        <p className='why-title'>{lang.why_join_startup}</p>

        <ul className='why-list-container'>
          {whyDiaspora.map((item, index) => {
            let borderType = index === whyDiaspora.length - 1 ? false : true;

            return (
              <li key={index}>
                <WhyFunction {...item} borderType={borderType} />
              </li>
            );
          })}
        </ul>

        <div className='join-bt-container'>
          <ButtonArrow
            maxWidth={currentLanguage === 'en' ? '218.2px' : '300px'}
            width={currentLanguage === 'en' ? '218.2px' : '300px'}
            className='join-btn'
            title={lang.join_as_startup}
            bgcolor='transparent'
            color='#009743'
            href={`https://community.ourbantaba.com/{currentLanguage}/register`}
          />
        </div>
      </div>
      <DestopLeftIllustration>
        <div className='device-frame2'>
          <Img
            src='startup-device2.png'
            alt='logo'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </DestopLeftIllustration>
    </DesktopStartupContainer>
  );
};

export default DesktopDiaspora;
