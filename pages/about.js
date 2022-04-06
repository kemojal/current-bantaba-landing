import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AboutTeamCard from '../components/AboutTeamCard';
import { Img } from '../components/Img';
import Image from 'next/image';
import { NavBar } from '../Sections/NavBar';
import i18n from 'i18next';
import { useRouter } from 'next/router';

// import Fade from 'react-reveal/Fade';
// skeleton loading
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import en from '../lang/en';
import fr from '../lang/fr';
import { Mission } from '../Sections/Mission';
import { FluidContainer } from '../components/FluidContainer';

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
  /* padding-top: 4rem; */
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
    /* color: #00853b; */
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
    /* margin-top: 80px; */
    /* position: relative; */
    /* display: flex; */
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
  /* .skeleton {
    background-color: #e8fcf0;
    background-image: linear-gradient(
      to right,
      #e8fcf0 0%,
      rgba(0, 0, 0, 0.05) 20%,
      #e8fcf0 40%,
      #e8fcf0 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: ${shimmer} 1s linear infinite;
  } */
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
    /* padding-bottom: 4rem; */
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
      /* padding-left: 0;
      padding-right: 0;
      background-color: orange !important; */
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
      /* height: 422px; */
      border-radius: 10px;
      overflow: hidden;
      margin: 0;
      /* background-color: red; */
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
      /* background-color: pink !important; */
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
    /* .section {
    padding: 0;
    } */

    .reset-mb-50 {
      margin-bottom: 0;
    }
  }
`;

export default function About({ team }) {
  const router = useRouter();
  const { locale } = router;
  const lan = locale == 'en' ? en : fr;

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
            <h1 className='about-m-title hide-on-desktop'>About Us</h1>

            {loaded ? (
              <p className='desktop-about-title hide-on-mobile mbd-15'>
                We’re linking Africa&#39;s startup ecosystem to global
                knowledge, network and capital.
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
                Bantaba is Africa’s biggest startup-diaspora community that
                connects African tech startups to investors, mentors and
                consultants in the African diaspora.
                <br />
                <br />
                Our platform enables the African diaspora to contribute to
                Africa’s tech ecosystem through networking, mentoring and
                investing in tech startups on the continent.
              </div>
            ) : (''
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
                  src={'/assets/images/Group-image_1.jpg'}
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
                  src={'/assets/images/Group-image_1.jpg'}
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
              A desire to build Africa
            </p>

            <div className='notosans-normal-licorice-16px line-height-24 desktop-normal-text'>
              The company was founded in 2021 by a group of young diaspora
              professionals who saw the potential of using Africa’s magnitude of
              resources in the diaspora to build the continent.
              <br />
              <br />
              Working together we built Bantaba, a startup-diaspora community
              where African tech startups can access knowledge, network and
              capital and diaspora professionals can contribute to the
              development of Africa by supporting entrepreneurs addressing
              important challenges on the continent.
            </div>
          </div>
          <div className='desk-textcolum'>
            <div className='v-spacer' />

            <div className='about-img-2 hide-on-desktop'>
              <Img
                src={'Group-image_2.jpg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
                priority={true}
              />
            </div>
            <div className='about-img-2 h-324 hide-on-mobile'>
              <Img
                src={'Group-image_2.jpg'}
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
              We’re empowering startups and bringing Africa closer to the
              Diaspora.
            </p>

            <div className='notosans-normal-licorice-16px line-height-24 desktop-normal-text'>
              As a diaspora professional, our platform uses your preference to
              connect you with startups that perfectly match your interest,
              think Tinder but for a different kind of love -{' '}
              <span className='emphasize'>LOVE FOR AFRICA</span>.
              <br />
              <br />
              African tech startups, on the other hand, can share their funding
              and knowledge needs, and get matched with diaspora investors or
              professionals in the community who can help reach their goals.
            </div>
          </div>
          <div className='desk-textcolum align-column-end'>
            <div className='about-img-2 h-399 hide-on-mobile'>
              <Img
                src={'Group-image_3.jpg'}
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
            Bantaba is on a mission to become the link between global knowledge,
            capital and Africa&#39;s startup ecosystem.
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
            It&#39;s{' '}
            <span className='color-green-desktop'>TIME FOR AFRICA</span>, Let's
            start the revolution together!
          </p>
        </div>
        <div className='section bg-section-two section-four pt-24 '>
          <div className='s4-white-space' />

          <p className='notosans-bold-licorice-22px  align-center desktop-title'>
            Our team
          </p>

          <ul className='team-list'>
            {team.team.map((item, index) => {
              return <AboutTeamCard key={index} {...item} />;
            })}
          </ul>
        </div>
      </FluidContainer>
      <Mission />
      <NavBar locale={lan} router={router} />
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
