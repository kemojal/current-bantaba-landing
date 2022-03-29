import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import { FluidContainer } from '../components/FluidContainer';
import { LinkContainer } from '../components/LinkContainer';
import AfricaMap from '../components/AfricaMap';

import Fade from 'react-reveal/Fade';

const MapSectionContainer = styled.section`
  /* background-color: #e8fcf0; */
  background-color: var(--ottoman);
  /* background-color: white; */
  /* min-height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding-top: 2rem;
  padding-bottom: 50px;
  /* padding-bottom: 3.125rem; */

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
    /* line-height: 30px; */
    text-align: center;
    /* font-family: Noto Sans; */
    /* font-style: normal; */
    /* font-weight: bold; */
    /* font-size: 26px; */
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
    /* font-size: 1.2rem; */
    /* line-height: 2rem; */
    /* line-height: 16px; */
    line-height: 22px;
  }
  .link {
    /* color: green; */
    /* font-weight: normal; */
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
    .map-right {
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 3.75rem;
    }

    .map-left {
      max-width: 800px;
    }
    p.title {
      line-height: 105%;
      text-align: center;
      /* font-family: Noto Sans; */
      /* font-style: normal; */
      /* font-weight: bold; */
      margin: 10px 0;
      margin-bottom: 0;
      padding: 1.56rem 0;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 130%;
      text-align: center;
      color: #011108;
    }
    p.normal {
      text-align: center;
      /* margin: 35px 0; */
      margin-top: 0;
      margin-bottom: 12px;
      /* font-size: 1.2rem; */
      /* line-height: 1.8rem; */

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
const MapImg = styled(motion.div)`
  position: relative;
  /* width: 376px; */
  /* height: 209px; */

  width: 833px;
  height: 399px;

  @media (min-width: 1280px) {
    width: 1498px;
    height: 834px;
  }
`;

const ArrowIcon = styled.div`
  position: relative;
  /* height: 12px; */
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const MapSection = () => {
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
    <MapSectionContainer ref={myRef}>
      <FluidContainer flipColumn={'column-reverse'}>
        <div className='map-left'>
          <div className='map-desktop'>
            <MapImg animate={animationName}>
              <Img
                src='desktop-map-2.png'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </MapImg>
          </div>
          <div className='map-mobile hide-on-desktop'>
            <MapImg animate={animationName}>
              <Img
                src='africa-map.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </MapImg>
          </div>
          {/* <MapImg animate={animationName}>
            <Img
              src='map-mobile.svg'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </MapImg> */}

          {/* */}

          {/* <AfricaMap/> */}
        </div>

        <div className='map-right'>
          <Fade bottom>
            <p className='notosans-bold-licorice-20px title'>
              Discover the most innovative and exciting startups in Africa
            </p>
          </Fade>
          <Fade bottom>
            <p className='notosans-normal-licorice-16px normal hide-on-desktop'>
              Our platform has since its launch connected over 150 African tech
              startups with diaspora professionals and investors across the
              world
            </p>
          </Fade>
          <Fade bottom>
            <p className='normal hide-on-mobile'>
              In 2021 we decided that location should no longer be a barrier to
              support entrepreneurs addressing Africa’s biggest challenges. Our
              platform has since its launch connected over 150 African tech
              startups with diaspora professionals and investors across the
              world
            </p>
          </Fade>
          <div className='desktop-spacer' />
          <Fade bottom>
            <LinkContainer>
              <Link
                className='link'
                href='https://community.ourbantaba.com/en/register'
              >
                <a>Join our growing community</a>
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
          </Fade>
        </div>
      </FluidContainer>
    </MapSectionContainer>
  );
};
