import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Link from 'next/link';
import { GlobalContext } from '../context/GlobalState';

import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import { FluidContainer } from '../components/FluidContainer';
import { LinkContainer } from '../components/LinkContainer';
import AfricaMap from '../components/AfricaMap';

const MapSectionContainer = styled.section`
  background-color: var(--ottoman);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding-top: 2rem;
  padding-bottom: 50px;

  .map-left,
  .map-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }

  p.title {
    text-align: center;
    margin: 10px 0;
    margin-bottom: 0;
    padding: 25px 0;
    line-height: 24px;
    color: rgba(19, 19, 19, 1);
  }
  p.normal {
    margin: 10px 0;
    margin-top: 0;
    margin-bottom: 20px;
    line-height: 22px;
  }
  .link {
    display: flex;
    justify-content: center;
    color: var(--kaitoke-green);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .hide-on-mobile {
    display: none;
  }

  .map-desktop {
    display: none;
  }

  @media (min-width: 1280px) {
    background-color: white;
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 0;
    .map-right {
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 3.75rem;
      paddin-left: 0;
      padding-right: 0;
    }

    .map-left {
      max-width: 800px;
    }
    p.title {
      line-height: 105%;
      text-align: center;
      margin: 10px 0;
      margin-bottom: 0;
      padding: 1.56rem 0;
      margin-top: ${({ lang }) => (lang === 'en' ? '10px' : '3.6px')};
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: ${({ lang }) => (lang === 'en' ? '2.5rem' : '2.1rem')};
      line-height: 130%;
      text-align: center;
      color: #011108;
      max-width: 750px;
    }
    p.normal {
      text-align: center;
      margin-top: 0;
      margin-bottom: 12px;

      color: #5b615e;
      color: yellow;
      font-family: 'Poppins';
      font-style: normal;
      font-size: 1.25rem;
      line-height: 160%;
      text-align: center;
      color: #5b615e;
    }

    .link {
      justify-content: flex-start;
    }
    .hide-on-desktop {
      display: none;
    }
    .map-desktop {
      display: block;
      width: 100vw;
      max-width: var(--max-width);
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hide-on-mobile {
      display: block;
    }

    .desktop-spacer {
      width: 1px;
      height: 1.56rem;
    }
  }
`;
const MapImg = styled.div`
  position: relative;

  width: 833px;
  height: 399px;

  @media (min-width: 1280px) {
    width: 1498px;
    height: 834px;

    width: var(--max-width);
    height: 622px;
  }
`;

const ArrowIcon = styled.div`
  position: relative;
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const MapSection = ({ lang }) => {
  const { currentLanguage } = useContext(GlobalContext);
  return (
    <MapSectionContainer lang={currentLanguage}>
      <FluidContainer flipColumn={'column-reverse'}>
        <div className='map-left'>
          <div className='map-desktop'>
            <MapImg>
              <Img
                src='desktop-map-2.png'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </MapImg>
          </div>
          <div className='map-mobile hide-on-desktop'>
            <MapImg>
              <Img
                src='africa-map.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </MapImg>
          </div>
        </div>

        <div className='map-right'>
          <p className='notosans-bold-licorice-20px title'>
            {lang.discover_innovative_startups_Africa}
          </p>

          <p className='notosans-normal-licorice-16px normal hide-on-desktop'>
            {lang.discover_innovative_startups_Africa_subtext_mobile}
          </p>

          <p className='normal hide-on-mobile'>
            {lang.discover_innovative_startups_Africa_subtext_desktop}
          </p>

          <div className='desktop-spacer' />

          <LinkContainer>
            <Link
              className='link'
              href={`https://community.ourbantaba.com/${currentLanguage}/register`}
            >
              <a>{lang.Join_our_growing_community}</a>
            </Link>
            <ArrowIcon>
              <Img
                src='arrow-green.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </ArrowIcon>
          </LinkContainer>
        </div>
      </FluidContainer>
    </MapSectionContainer>
  );
};
