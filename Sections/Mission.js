import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';
import SocialContainer from '../components/SocialContainer';
import Footer from './Footer';

import Fade from 'react-reveal/Fade';
import FooterCols from '../components/FooterCols';

const MissionSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  position: relative;
  padding: 50px 1rem;
  padding-bottom: 4rem;
  background-color: var(--ottoman);
  /* padding-top: 0rem; */
  .logo-frame{
      width: 201px;
      height: 41px;
      position: relative;
  }
  .mission {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem
    width: 100vw;
    /* color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400; */
    /* line-height: 25px; */
    margin-top: 1rem;
    letter-spacing: 0.00px;
    line-height: 25px;
    text-align: left;
  }
  .footer-wrapper{
    width: 100%;
    max-width: var(--max-width)
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hide-on-mobile{
    display: none;
  }

  @media (min-width: 1280px) {
    width: 100%;
    padding-bottom: 0;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-between;

    .sub-mission{
      /* background-color: red; */
      max-width: 30%;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      padding-bottom: 43px;
    }
    .address-w-25{
      width: auto;
    }
    .w-45{
      max-width: 50%;
    }
    .row-on-desktop{
      display: flex;
      flex-direction: row;
      /* align-items: center; */
      width: 100%;
      justify-content: space-between;
      /* background-color: green; */
      max-width: 1200px;
      padding: 0 50px;
    }
    .footer-wrapper{
      width: 100%;
      /* background-color: red; */
      margin: 0 10px;
      width: 40%;
      justify-content: flex-start;
    }
    .hide-on-mobile{
    display: block;
  }
  }
`;

const Copyright = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    letter-spacing: 0px;
    line-height: 19px;
    text-align: center;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    height: 72px;
    border-top: 1px solid #d1ded8;
    width: 100%;

    span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #009743;
    }
  }
`;

export const Mission = () => {
  // const socialList = [
  //   {
  //     src: 'twiiter.svg',
  //   },
  //   {
  //     src: 'facebook.svg',
  //   },
  //   {
  //     src: 'instagram.svg',
  //   },
  //   {
  //     src: 'linkedin.svg',
  //   },
  // ];

  const socialList = [
    {
      scrDesktop: 'twiiter-d.svg',
      link: ' //twitter.com/OurBantaba/',
    },
    {
      scrDesktop: 'facebook-d.svg',
      link: ' //www.facebook.com/ourbantaba/',
    },
    {
      scrDesktop: 'instagram-d.svg',
      link: '//www.instagram.com/ourbantaba/',
    },
    {
      scrDesktop: 'linkedin-d.svg',
      link: ' //www.linkedin.com/company/bantaba/',
    },
  ];

  const address = {
    title: 'Address',
    address: ['Östermalmsgatan 26A ', '114 26 Stockholm'],
  };
  return (
    <MissionSection>
      <div className='row-on-desktop'>
        <div className='sub-mission'>
          <Fade bottom>
            <div className='logo-frame'>
              <Img
                src='mission-logo.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className='notosans-normal-licorice-16px mission'>
              Our mission is to empower Africa&#39;s tech startup ecosystem by
              leveraging resources in the African diaspora
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <div className='footer-wrapper w-45'>
            <Footer />
          </div>
        </Fade>

        <div className='sub-mission address-w-25'>
          <div className='hide-on-mobile'>
            <FooterCols {...address} />
          </div>

          <Fade bottom>
            <SocialContainer socialList={socialList} />
          </Fade>
        </div>
      </div>

      <Copyright>
        <Fade bottom>
          <span className='notosans-normal-licorice-14px'>
            www.ourbantaba.com
          </span>
          <span className='notosans-normal-licorice-14px'>
            Copyright © 2021
          </span>
        </Fade>
      </Copyright>
    </MissionSection>
  );
};
