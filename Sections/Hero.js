import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Img } from '../components/Img';

import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

import { Button } from '../components/Button';

import { useTranslation } from 'next-i18next';
import ButtonArrow from '../components/ButtonArrow.';
import Function from '../components/Function';
import Illustration from './Illustration';

import Slide from 'react-reveal/Zoom';

const HeroSection = styled.section`
  background-color: var(--ottoman);
  /* height: 80vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 1rem; */
  /* padding-top: 0rem; */
  padding: 2em 1rem;

  h1 {
    /* font-size: 1.8em; */
    /* color: var(--licorice); */
    /* font-family: var(--font-family-noto_sans); */
    /* font-size: var(--font-size-xxl); */
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0px;
    text-align: left;

    text-align: left;
    vertical-align: top;
    font-size: 2.5em;
    font-family: Poppins;
    line-height: 125%;
    color: #001108;
    letter-spacing: -0.028125em;

    /* kidas design */
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxl);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: left;
  }
  .subtext {
    font-size: 1.2rem;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 2rem;
    text-align: left;
    color: var(--normal-text-color);
    font-weight: 400;
    margin-bottom: 32px;
    margin-top: 10px;
    font-size: 1.125em;

    /* kidas design */
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
    text-align: left;
  }
  Button {
    margin: 30px 0;
    /* width: calc(100vw - 4rem); */
    box-shadow: 0 0 0 2px #00853b2b, 0 0 0 6px #00000005;
  }
  .functions {
    width: 100vw;
    display: none;
    padding: 10px 0;
    margin-bottom: 10px;

    border-bottom: 1px solid #c9cecb;
  }
  .button-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* background-color: orange; */
    align-items: center;
  }

  @media (min-width: 600px) {
    width: 50%;
    padding-top: 80px;
    /* padding-left: 150px; */
    padding-right: 0px;
    align-items: flex-start;
    background-color: transparent;
    overflow-x: hidden;
    position: relative;
    /* background-color: orange; */

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      /* font-size: 45px; */
      /* font-size: 3.2em; */
      font-size: 2.81rem;
      line-height: 120%;
      margin-bottom: 1.56rem;
      /* margin-bottom: 0.5em; */
    }
    .subtext {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      color: #5b615e;
      margin-top: 0px;
    }
    .functions {
      width: 100%;
      max-width: 527px;
      /* margin-top: 28px; */
      margin-top: 2.8rem;
      padding-bottom: 3.25rem;
      border-bottom: 1px solid ##C9CECB;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .button-row {
      margin-top: 2.5rem;
      flex-direction: row;
      display: flex;
      /* background-color: orange; */
      /* justify-content: space-between; */
    }
    .w-120-btn {
      /* ${ButtonArrow} */
      background-color: red;
      /* max-width: 10px !important; */
    }
    .w-270-btn {
      width: 320px;
    }
  }
`;

const VideoPlaceholder = styled.div`
  margin: 10px 0;
  /* background-color: var(--main-bg-color); */
  /* opacity: 0.2; */
  position: relative;
  width: 100vw;
  height: 290px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  /* &::after { 
    content: '',
    position: absolute,
    width: 50px;
    height: 50px;
    background-color: red;
    z-index: 10px;
  } */
  @media (min-width: 600px) {
    display: none;
  }
`;
export const Hero = ({ lang }) => {
  const { t, i18n } = useTranslation();
  console.log('i18n = ', i18n);

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

  const functionsData = [
    {
      text: lang.knowledge,
      src: 'function-1.svg',
    },
    {
      text: lang.capital,
      src: 'capital.svg',
    },
    {
      text: lang.network,
      src: 'network.svg',
    },
  ];
  return (
    <HeroSection ref={myRef}>
      <motion.h1
        className='hero-title'
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
        {lang.hero_header}
      </motion.h1>
      <motion.p
        className='subtext'
        initial={fadeOut}
        animate={fadeIn}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          default: {
            duration: 0.6,
          },
        }}
      >
        {lang.hero_discription}
      </motion.p>
      {/* <Button title={'Create an Account'} /> */}
      <div className='functions'>
        {functionsData.map((item, index) => {
          return <Function key={index} {...item} />;
        })}
      </div>

      {/*Using Zoom Effect*/}
      <motion.div
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
        className='button-row'
      >
        <ButtonArrow
          className='w-270-btn'
          title={lang.create_account}
          isArrow={true}
          color={'white'}
          maxWidth ='276.4px'
          href='https://community.ourbantaba.com/en/register'
        />
        <ButtonArrow
          className='w-120-btn'
          title={lang.login}
          bgcolor='transparent'
          color='#009743'
          maxWidth='120px'
          href='https://community.ourbantaba.com/en/login'
        />
      </motion.div>
      <VideoPlaceholder>
        <Img src='hero.gif' alt='logo' layout='fill' objectFit='contain' />
      </VideoPlaceholder>
      {/* <Illustration /> */}
    </HeroSection>
  );
};
