import React from 'react';
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1rem;

  h1 {
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
    align-items: center;
  }

  @media (min-width: 600px) {
    width: 50%;
    padding-top: 80px;
    padding-right: 0px;
    align-items: flex-start;
    background-color: transparent;
    overflow-x: hidden;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }

    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-size: 2.81rem;
      font-size: ${({ lang }) => (lang === 'en' ? '2.81rem' : '2.5rem')};
      line-height: 120%;
      margin-bottom: 1.56rem;
    }
    .subtext {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      color: #5b615e;
      margin-top: 0px;
      padding-right: 10px;

      font-family: 'Poppins';

      color: #5b615e;
    }
    .functions {
      width: 100%;
      max-width: 527px;
      margin-top: 2.8rem;
      padding-bottom: 3.25rem;
      border-bottom: 1px solid ##c9cecb;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .button-row {
      margin-top: 2.5rem;
      flex-direction: row;
      display: flex;
    }
    .w-270-btn {
      width: 320px;
    }
  }
`;

const VideoPlaceholder = styled.div`
  margin: 10px 0;
  position: relative;
  width: 100vw;
  height: 290px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`;
export const Hero = ({ lang }) => {
  const { t, i18n } = useTranslation();

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
    <HeroSection lang={lang}>
      <h1 className='hero-title'>{lang.hero_header}</h1>
      <p className='subtext'>{lang.hero_discription}</p>
      <div className='functions'>
        {functionsData.map((item, index) => {
          return <Function key={index} {...item} />;
        })}
      </div>

      <div className='button-row'>
        <ButtonArrow
          className='w-270-btn'
          title={lang.create_account}
          isArrow={true}
          color={'white'}
          maxWidth='276.4px'
          href='https://community.ourbantaba.com/en/register'
        />
        <ButtonArrow
          className='w-120-btn'
          title={lang.login}
          bgcolor='transparent'
          color='#009743'
          maxWidth='150px'
          href='https://community.ourbantaba.com/en/login'
        />
      </div>
      <VideoPlaceholder>
        <Img
          priority={true}
          src='hero.gif'
          alt='logo'
          layout='fill'
          objectFit='contain'
        />
      </VideoPlaceholder>
    </HeroSection>
  );
};
