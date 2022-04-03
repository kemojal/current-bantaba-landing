import React, { useState, useEffect, useRef, useContext } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Button } from '../components/Button';

import { Img } from '../components/Img';
import { GlobalContext } from '../context/GlobalState';

import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import WhyFunction from '../components/WhyFunction';
import ButtonArrow from '../components/ButtonArrow.';

import Fade from 'react-reveal/Fade';

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
    /* line-height: 30px;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    /* font-size: 25px; */
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
    /* line-height: 18px; */
    text-align: center;
    padding-bottom: 20px ;
    line-height: 24px;

  }
  p.normal {
    /* font-size: 1rem; */
    /* line-height: 1.5rem; */
    margin-top: 5px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 0.00px;
    /* line-height: 18px; */
    line-height: 24px;
    /* padding: 0 6.5px; */
  }

  .device-frame {
    margin: 25px 0;
    position: relative;
    width: 350px;
    /* height: 416px; */
    height: 416px;
  }

  Button {
    margin: 10px 0;
    /* width: calc(100vw - 4rem); */
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
    /* background-color: pink; */
    /* padding: 0 15px; */
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
    /* font-size: 18px;
    margin-top: 18px;
    text-align: center;
    color: #00000082; */

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
    /* text-decoration: underline; */
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
      /* max-width: 1220px; */
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
      line-height: 130%;
      text-align: left;
      color: #011108;
      width: 100%;
      /* padding: 0 25px; */
      margin-bottom: 2rem;
      padding: 0;
    }
    
    .right-section {
      width: 50%;
      padding: 0 10px;
      padding-top: 50px;

      /* height: 950px; */
      
      
      /* margin-left: 0px; */
      /* padding-right: 150px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding-top: 150px; */
    }
    .why-list-container {
      /* padding: 10px 0; */
      /* background-color: green; */
    }
    .mobile-info {
      display: none;
    }
    .device-frame2 {
      position: relative;
      width: 762px;
      height: 835.65px;
    }
    .join-bt-container {
      width: 90%;
      justify-content: flex-start;
    }
    .join-btn {
      /* width: 200px !important; */
    }
    .footer-text {
      width: 90%;
      padding: 2.19rem 0;
      margin-top: 20px;
      border-top: 1px solid #5b615e30;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      position: relative;
      /* or 32px */

      /* Paragraph */

      color: #5b615e;
    }
    .align-row{
      position: absolute;
      top: 64px;
      left: 125px;
      display: flex;
      width: auto;
      justify-content: flex-start;
  }
  }
  @media (min-width: 1500px) {
    position: relative;
    padding: 40px 0;
    .container {
      /* max-width: 1200px; */
      /* max-width: calc(100% - 300px); */
      /* background-color: orange; */
      max-width: var(--max-width);
    }
    .right-section {
      /* padding: 0 10px; */
      /* padding-top */
    }
  }
`;
// const Container = styled.div`
//     width: 100vw;
//     background: orange;
//     @media (min-width: 1280px) {

//     }
// `
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
      /* width: 973.96px; */
      /* width: 830.96px; */
      width: 672.96px;
      top: 50px;
      bottom: 0px;
      /* left: -260px; */
      /* left: -329px; */
      left: -175px;

      width: 900px;
      left: -300px;
      background: url('/assets/images/why-blob.svg') no-repeat;
      background-size: 100% 100%;
    }
  }
`;
export const WhyJoin = ({ lang }) => {
  const { showModal, showNewsLetterModal, closeNewsLetterModal } =
    useContext(GlobalContext);

  const openNewsLetterModal = () => {
    showNewsLetterModal();
  };
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

  const whyDiaspora = [
    {
      text: lang.invest_in_afica,
      subText: lang.invest_subtext,
      src: 'why-d1.svg',
    },
    {
      text: lang.be_part_of_the_startup_success,
      subText: lang.startup_success_subtext,
      src: 'why-d2.svg',
    },
    {
      text: lang.career_opportunities,
      subText: lang.career_opportunities_subtext,
      src: 'why-d3.svg',
    },
  ];
  return (
    <WhySection ref={myRef}>
      <div className='container'>
        <DestopLeftIllustration>
          <Fade bottom>
            <div className='device-frame2'>
              <Img
                src='why-device.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Fade>
        </DestopLeftIllustration>
        <div className='right-section'>
          <Fade bottom>
            <p className='why-title'>{lang.why_join_diaspora}</p>
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
          <div className='join-bt-container'>
            <ButtonArrow
              className='join-btn'
              title={lang.join_as_diaspora}
              bgcolor='transparent'
              color='#009743'
              maxWidth='auto'
              width = '300px'
              href={'https://community.ourbantaba.com/en/register'}
            />
          </div>
          <div className='footer-text'>
            <Fade right>
              {lang.are_you_none_diaspora + ' '}
              <div className='align-row'>
                <span>{lang.connect_with_us}</span>
                <span className='link' onClick={openNewsLetterModal}>
                  <a>{lang.here}.</a>
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <div className='mobile-info'>
          <motion.p
            className='why-title'
            initial={fadeOut}
            animate={fadeIn}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              default: {
                duration: 0.4,
              },
            }}
          >
            {lang.why_join_diaspora}
            {/* Why you should join our diaspora community? */}
          </motion.p>
          <Fade>
            <div className='device-frame'>
              <Img
                src='mobile-pic-1.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Fade>
          <Fade bottom>
            <p className='notosans-bold-licorice-18px why-sub-title'>
              {lang.discover_mentor_and_invest}
            </p>
          </Fade>
          <Fade bottom>
            <p className='notosans-normal-licorice-18px normal pl-pr-15'>
              {lang.get_an_opportunity}
            </p>
          </Fade>
          <Fade bottom>
            <div className='join-bt-container'>
              <ButtonArrow
                type={'no border'}
                className='join-btn'
                title={lang.join_as_diaspora}
                bgcolor='var(--algae-green)'
                color='var(--licorice)'
                href='https://community.ourbantaba.com/en/'
              />
            </div>
          </Fade>
          <div className='footer'>
            <Fade right>
              {lang.are_you_none_diaspora + ' '}
              <div className='align-row'>
                <span>{lang.connect_with_us}</span>
                <span className='link'>
                  <span onClick={openNewsLetterModal}>
                    <a>{lang.here}.</a>
                  </span>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </WhySection>
  );
};
