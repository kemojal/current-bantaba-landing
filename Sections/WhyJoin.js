import React, { useContext } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Button } from '../components/Button';

import { Img } from '../components/Img';
import { GlobalContext } from '../context/GlobalState';

import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import WhyFunction from '../components/WhyFunction';
import ButtonArrow from '../components/ButtonArrow.';

const WhySection = styled.section`
  background-color: transparent;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding: 0 15px;
  position: relative;

  .container {
    width: 100vw;
  }
  p.why-title {
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
    text-align: center;
    padding-bottom: 20px ;
    line-height: 24px;

  }
  p.normal {
    margin-top: 5px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 0.00px;
    line-height: 24px;
  }

  .device-frame {
    margin: 25px 0;
    position: relative;
    width: 350px;
    height: 416px;
  }

  Button {
    margin: 10px 0;
    box-shadow: 0 0 0 2px #00853b2b, 0 0 0 6px #00000005;
  }
  
  .pl-pr-15{
    padding: 0 15px;
    text-align: center;
  }
  .mobile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px 0;
  }
  .right-section {
    display: none;
  }
  
  .join-bt-container {
    width: 90%;
    display: flex;
    justify-content: center;
  }
  .footer {
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxs);
    font-weight: 400;
    letter-spacing: 0.00px;
    line-height: 18px;
    text-align: center;
    margin-top: 18px;

  }
  .align-row{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .link {
    color: #0033ff;
    margin-left: 10px;
    cursor: pointer;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    padding-left: 0px;

    align-items: center;
    justify-content: center;

    .container {
      max-width: var(--max-width);
      display: flex;
      flex-direction: row;
      padding: 40px 0;
    }
    p.why-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      font-size: 37px;
      line-height: 130%;
      text-align: left;
      color: #011108;
      width: 100%;
      margin-bottom: 2rem;
      padding: 0;
    }
    
    .right-section {
      width: 50%;
      padding: 0 10px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .mobile-info {
      display: none;
    }
    .device-frame2 {
      position: relative;
      width: 762px;
      height: 835.65px;
      transform: translateX(-86px);
    }
    .join-bt-container {
      width: 90%;
      justify-content: flex-start;
    }
    
    .footer-text {
      width: ${({ lang }) => (lang === 'en' ? '90%' : '100%')};
      padding: 2.19rem 0;
      margin-top: 20px;
      border-top: 1px solid #5b615e30;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      position: relative;

      color: #5b615e;
    }
    .align-row{
      position: absolute;
      top: 67px;
      left: ${({ lang }) => (lang === 'en' ? '126px' : '280px')};
      display: flex;
      width: auto;
      justify-content: flex-start;
  }
  }
  @media (min-width: 1500px) {
    position: relative;
    padding: 40px 0;
    .container {
      max-width: var(--max-width);
    }
  }
`;

const DestopLeftIllustration = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex !important;
    width: 50%;
    margin-right: 0px;
    display: flex;
    z-index: 10;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50px;
      bottom: 0px;
      width: 900px;
      left: -330px;
      background: url('/assets/images/why-blob.svg') no-repeat;
      background-size: 100% 100%;
    }
  }
`;
export const WhyJoin = ({ lang }) => {
  const { showNewsLetterModal, currentLanguage } = useContext(GlobalContext);

  const openNewsLetterModal = () => {
    showNewsLetterModal();
  };

  const whyDiaspora = [
    {
      text: lang.invest_in_afica_dekstop,
      subText: lang.invest_subtext_dekstop,
      src: 'why-d1.svg',
    },
    {
      text: lang.be_part_of_the_startup_success_dekstop,
      subText: lang.startup_success_subtext_dekstop,
      src: 'why-d2.svg',
    },
    {
      text: lang.career_opportunities_dekstop,
      subText: lang.career_opportunities_subtext_dekstop,
      src: 'why-d3.svg',
    },
  ];
  return (
    <WhySection id='whyjoin' lang={currentLanguage}>
      <div className='container'>
        <DestopLeftIllustration>
          <div className='device-frame2'>
            <Img
              src='why-device2b-optimized2.png'
              alt='logo'
              layout='fill'
              objectFit='contain'
              priority={true}
            />
          </div>
        </DestopLeftIllustration>
        <div className='right-section'>
          <p className='why-title'>{lang.why_join_diaspora}</p>
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
              className='join-btn'
              title={lang.join_as_diaspora}
              bgcolor='transparent'
              color='#009743'
              // maxWidth='auto'
              maxWidth={currentLanguage === 'en' ? '218.2px' : '300px'}
              width={currentLanguage === 'en' ? '218.2px' : '300px'}
              href={`https://community.ourbantaba.com/${currentLanguage}/register`}
            />
          </div>
          <div className='footer-text'>
            {lang.are_you_non_diaspora + ' '}
            <div className='align-row'>
              <span>{lang.connect_with_us}</span>
              <span className='link' onClick={openNewsLetterModal}>
                <a>{lang.here}.</a>
              </span>
            </div>
          </div>
        </div>
        <div className='mobile-info'>
          <p className='why-title'>{lang.why_join_diaspora}</p>

          <div className='device-frame'>
            <Img
              src='mobile-pic-4b.svg'
              alt='logo'
              layout='fill'
              objectFit='contain'
              priority={true}
            />
          </div>

          <p className='notosans-bold-licorice-18px why-sub-title'>
            {lang.discover_mentor_and_invest_mobile}
          </p>

          <p className='notosans-normal-licorice-18px normal pl-pr-15'>
            {lang.get_an_opportunity_mobile}
          </p>

          <div className='join-bt-container'>
            <ButtonArrow
              type={'no border'}
              className='join-btn'
              title={lang.join_as_diaspora}
              bgcolor='var(--algae-green)'
              color='var(--licorice)'
              href={`https://community.ourbantaba.com/${currentLanguage}/register`}
              // maxWidth={currentLanguage === 'en' ? '218.2px' : '300ppx'}
              width={currentLanguage === 'en' ? '218.2px' : '300px'}
            />
          </div>

          <div className='footer'>
            {lang.are_you_non_diaspora + ' '}
            <div className='align-row'>
              <span>{lang.connect_with_us}</span>
              <span className='link'>
                <span onClick={openNewsLetterModal}>
                  <a>{lang.here}.</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </WhySection>
  );
};
