import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AboutTeamCard from '../components/AboutTeamCard';
import { Img } from '../components/Img';
import Image from 'next/image';
import { NavBar } from '../Sections/NavBar';
import i18n from 'i18next';
import { useRouter } from 'next/router';

// import Fade from 'react-reveal/Fade';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import en from '../lang/en';
import fr from '../lang/fr';
import { Mission } from '../Sections/Mission';
import { FluidContainer } from '../components/FluidContainer';

import { GlobalContext } from '../context/GlobalState';

const shimmer = keyframes` 
  0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
  }
`;

const Aboutontainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;

  .section {
    width: 100%;
    padding: 2rem 10px;
    padding-top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .about-m-title {
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxxl);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: left;
    width: 100%;
    font-size: 28px;
    margin-bottom: 7px;
  }
  .about-content {
    width: 100%;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    height: 217px;
    letter-spacing: 0px;
    line-height: 24px;
    text-align: left;
    padding: 15px 0;
  }
  .img-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-img-1 {
    position: relative;
    width: 350px;
    height: 111px;

    width: 350px;
    height: 265px;
    border-radius: 10px;
    overflow: hidden;
  }

  .bg-section-two {
    background-color: #e8fcf1;
    padding-bottom: 0;
  }
  .about-section-title {
    letter-spacing: 0px;
    line-height: 32px;
    text-align: left;
    margin-bottom: 10px;
  }
  .pt-24 {
    padding-top: 24px;
  }
  .about-img-2 {
    position: relative;
    width: 350px;
    height: 216px;
    margin: 24px 0;
  }
  .emphasize {
    font-weight: bold;
  }
  .align-center {
    text-align: center;
  }
  .s-three {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
  .bg-fix-s3 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .z-10 {
    z-index: 10;
  }
  .blob-green {
    color: #005225;
  }
  .blob-wrapper {
    display: block;
    width: 262.23px;
    height: 253px;
    position: relative;
  }
  .section-four {
    margin-top: 150px;
    padding-bottom: 4rem;
    position: relative;
  }
  .s4-white-space {
    display: block;
    width: 100%;
    height: 10px;
    position: absolute;
    top: -35px;
    border-top: 1px solid #00853b !important;
    max-width: 351px;
    display: none;
  }
  .team-list {
    width: 100%;
    margin-top: 20px;
  }
  .pb-24 {
    padding-bottom: 24px;
  }
  .mb-50 {
    margin-bottom: 50px;
  }
  .pb-50 {
    padding-bottom: 50px;
  }
  .hide-on-desktop {
    display: block;
  }
  .hide-on-mobile {
    display: none;
  }
  @media (min-width: 1280px) {
    padding-bottom: 0;
    .team-list {
      display: flex;
      align-items: center;
      justify-content: center;

      flex-wrap: wrap;
    }
    .bg-section-two {
      background-color: white;
    }
    .row-on-desktop {
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 50px 0;
    }
    .reverse-row {
      flex-direction: row-reverse;
    }
    .desk-textcolum {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      justify-content: center;
    }
    .align-column-end {
      align-items: flex-end;
    }
    .about-img-2 {
      width: 558px;
      height: 358px;

      border-radius: 10px;
      overflow: hidden;
      margin: 0;
    }
    .h-422 {
      height: 422px;
    }
    .h-324 {
      height: 318px;
    }
    .h-399 {
      height: 399px;
    }
    .about-img-22 {
      width: 558px;

      height: 422px;
      border-radius: 10px;
      overflow: hidden;
      margin: 0;
      background-color: green;
      position: relative;
    }
    .img-wrapper {
      width: auto;
    }
    .mission-text-desktop {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 400;
      font-size: 30px;
      max-width: 1000px;
      line-height: 45px;
      color: #011108;
      text-align: left;
      margin-top: 10px;
      text-align: center;
    }

    .s-three {
      background-color: #dfffef;
      height: 206px;
    }
    .blob-green {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 150%;
      text-align: center;
      color: #011108;
      position: relative;
    }
    .fixed-bg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
    }
    .fixed-bg-relative {
      position: relative;
      width: 1146px;
      height: 206px;
      width: 100%;
    }
    .color-green-desktop {
      color: #009743;
    }
    .desktop-title {
      font-family: 'poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
      color: #011108;
      width: 100%;
      text-align: left;
    }
    .blob-wrapper,
    .s4-white-space {
      display: none;
    }

    .hide-on-desktop {
      display: none;
    }
    .hide-on-mobile {
      display: block;
    }
    .desktop-about-title {
      font-family: 'poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
      color: #011108;
    }
    .mbd-15 {
      margin-bottom: 15px;
    }
    .desktop-normal-text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      color: #5b615e;
    }
    .pr-30 {
      padding-right: 30px;
    }
    .pl-30 {
      padding-left: 30px;
    }

    .reset-mb-50 {
      margin-bottom: 0;
    }
  }
`;

export default function About({ team }) {
  const { currentLanguage, setCurrentLanguage } = useContext(GlobalContext);

  const router = useRouter();
  const { locale } = router;
  const [lan, setlan] = useState(currentLanguage == 'en' ? en : fr);

  useEffect(() => {
    const browserlang = localStorage.getItem('browserLanguague');
    if (browserlang) {
      setCurrentLanguage(browserlang);
    } else {
      localStorage.setItem('browserLanguague', JSON.stringify(currentLanguage));
    }
    setlan(currentLanguage == 'en' ? en : fr);
  }, [currentLanguage]);

  const [loaded, setLoaded] = useState(false);
  const imgSkeleton = loaded ? '' : 'skeleton';
  const handleLoaded = () => {
    setLoaded(true);
  };

  return (
    <Aboutontainer>
      <FluidContainer>
        <div className='section row-on-desktop'>
          <div className='desk-textcolum pr-30'>
            <h1 className='about-m-title hide-on-desktop'>
              {lan.about_us_page}
            </h1>

            {loaded ? (
              <p className='desktop-about-title hide-on-mobile mbd-15'>
                {lan.we_linking_africa_desktop}
              </p>
            ) : (
              <Skeleton
                baseColor='#E8FCF0'
                height={45}
                width={528}
                count={3}
                highlightColor='#04853A25'
                className='desktop-about-title hide-on-mobile mbd-15'
              />
            )}

            {loaded ? (
              <div className=' notosans-normal-licorice-16px line-height-24 pb-24 desktop-normal-text'>
                {lan.subtext_11}
                <br />
                <br />
                {lan.subtext_12}
              </div>
            ) : (
              ''
              // <Skeleton
              //   baseColor='#E8FCF0'
              //   height={28}
              //   width={528}
              //   count={5}
              //   highlightColor='#04853A25'
              //   className=' notosans-normal-licorice-16px line-height-24 pb-24 desktop-normal-text'
              // />
            )}
          </div>
          <div className='desk-textcolum align-column-end'>
            <div className='img-wrapper'>
              <div className={`about-img-1 ${imgSkeleton} hide-on-desktop`}>
                <Image
                  src={'/assets/images/Group-image_1-optimized.jpg'}
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                  priority={true}
                />
              </div>
              <div
                className={`about-img-2 h-422 ${imgSkeleton} hide-on-mobile`}
              >
                <Image
                  src={'/assets/images/Group-image_1-optimized.jpg'}
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                  // priority={true}
                  onLoad={(e) => {
                    e.target.src.indexOf('data:image/gif;base64') < 0 &&
                      handleLoaded();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='section bg-section-two pt-24  row-on-desktop reverse-row'>
          <div className='desk-textcolum pl-30'>
            <p className='notosans-bold-licorice-22px  about-section-title desktop-about-title'>
              {lan.desire_build_africa}
            </p>

            <div className='notosans-normal-licorice-16px line-height-24 desktop-normal-text'>
              {lan.subtext_21}
              <br />
              <br />
              {lan.subtext_22}
            </div>
          </div>
          <div className='desk-textcolum'>
            <div className='v-spacer' />

            <div className='about-img-2 hide-on-desktop'>
              <Img
                src={'Group-image_2-optimized.jpg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
            <div className='about-img-2 h-324 hide-on-mobile'>
              <Img
                src={'Group-image_2-optimized.jpg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className='section row-on-desktop'>
          <div className='desk-textcolum pr-30'>
            <p className='notosans-bold-licorice-22px  about-section-title pt-24 pt-24 desktop-about-title'>
              {lan.we_empowring_startups}
            </p>

            <div className='notosans-normal-licorice-16px line-height-24 desktop-normal-text'>
              {lan.subtext_31} -{' '}
              <span className='emphasize'>LOVE FOR AFRICA</span>.
              <br />
              <br />
              {lan.subtext_32}
            </div>
          </div>
          <div className='desk-textcolum align-column-end'>
            <div className='about-img-2 h-399 hide-on-mobile'>
              <Img
                src={'Group-image_3-optimized.jpg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className='section'>
          <p className='notosans-bold-licorice-22px  align-center line-height-34 pb-24 mission-text-desktop'>
            {lan.about_bantaba_is_on_mission}
          </p>
        </div>
        <div className='section s-three mb-50 reset-mb-50'>
          <div className='bg-fix-s3'>
            <div className='blob-wrapper'>
              <Img
                src={'blob-about.svg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
          </div>
          <div className='fixed-bg hide-on-mobile'>
            <div className='fixed-bg-relative'>
              <Img
                src={'fixed-bg-about.svg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
          </div>

          <p className='notosans-bold-licorice-22px  align-center z-10 blob-green'>
            {lan.its + ' '}
            <span className='color-green-desktop'>{lan.time_for_africa}</span>
            {' ' + lan.revolution_together}
          </p>
        </div>
        <div className='section bg-section-two section-four pt-24 '>
          <div className='s4-white-space' />

          <p className='notosans-bold-licorice-22px  align-center desktop-title'>
            {lan.our_team}
          </p>

          <ul className='team-list'>
            {team.team.map((item, index) => {
              return <AboutTeamCard key={index} {...item} />;
            })}
          </ul>
        </div>
      </FluidContainer>
      <Mission lang={lan} />
      <NavBar currentlan={lan} locale={lan} router={router} />
    </Aboutontainer>
  );
}

About.getInitialProps = async (ctx) => {
  const res = await fetch(
    'https://landingapi-dev.ourbantaba.com/teams/members/en/all'
  );
  const json = await res.json();
  return { team: json };
};
