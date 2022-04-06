import { useState, useContext } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { useSelector } from 'react-redux';

import en from '../lang/en';
import fr from '../lang/fr';

import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

import styled from 'styled-components';

const CombinedHero = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  position: relative;

  .container {
    width: 100vw;
  }
  @media (min-width: 600px) {
    background-color: green;
    flex-direction: row;
    background-color: var(--ottoman);
    width: 100vw !important;
    /* overflow: hidden !important; */
    justify-content: center !important;
    align-items: center !important;
    min-height: 906px;
    background: url('/assets/images/hero-bg.svg') no-repeat center center/50px
      50px fixed;
    /* background-size: 100%  100%; */
    background-size: cover !important;
    background-position-x: center;
    background-position-y: center;

    /* &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: url('/assets/images/hero-bg.svg') no-repeat;
  background-size: 100% 100%;
  
} */
    .container {
      width: 100%;
      /* background-color: red; */
      /* max-width: 1220px; */
      display: flex;
      flex-direction: row;
      /* padding-right: 150px; */
      padding: 0 !important;
      width: var(--max-width) !important;

      /* overflow: hidden !important; */
    }
  }
  @media (min-width: 1500px) {
    position: relative;
    .container {
      /* max-width: 1220px; */
      /* max-width: calc(100% - 300px); */
      display: flex;
      flex-direction: row;
      /* overflow: hidden; */
      height: auto;
      position: relative;
      z-index: 10;

      display: flex;
      flex-direction: row;
      /* overflow-x: hidden; */
      height: auto;
      /* height: 780px; */
      adding-right: 0px;
    }
  }
  /* @media (min-width: 2200px) {
    .container {
      max-width: 1150px;
      background-color: orange;
      display: flex;
      flex-direction: row;
      overflow-x: hidden;
      height: auto;
      height: 780px;
    }
  } */
`;

import { Button } from '../components/Button';
import { NavBar } from '../Sections/NavBar';
import { Hero } from '../Sections/Hero';
import { WhyJoin } from '../Sections/WhyJoin';
import { JoinStartup } from '../Sections/JoinStartup';
import { AboutSection } from '../Sections/About';
import { MapSection } from '../Sections/MapSection';
import { Testimonial } from '../Sections/Testimonial';
import { Press } from '../Sections/Press';
import { Partner } from '../Sections/Partner';
import { Mission } from '../Sections/Mission';
import Illustration from '../Sections/Illustration';
import JoinNewsLetterModal from '../components/JoinNewsLetterModal';

import { GlobalContext } from '../context/GlobalState';
import ContactUsModal from '../components/ContactUsModal';
import NewsLetterModal from '../components/NewsLetterModal';

export default function Home({ press }) {
  const router = useRouter();
  const { locale } = router;
  const lan = locale == 'en' ? en : fr;

  const { currentLanguage } = useContext(GlobalContext);

  // const { currentLanguage } = useSelector((state) => state);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bantaba Landing Page</title>
        <meta
          name='description'
          content='Bantaba enables Startups in Africa to access talent and capital from the diaspora community. '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='icon' href='/favicons/favicon.ico' />
      </Head>

      <main className={`${styles.main} cont`}>
        <CombinedHero>
          <div className='container'>
            <Hero lang={lan} />
            <Illustration />
          </div>
        </CombinedHero>
        <WhyJoin lang={lan} />
        <JoinStartup lang={lan} />
        <AboutSection lang={lan} />
        <MapSection lang={lan} />
        <Testimonial lang={lan} />
        <Press lang={lan} press={press} />
        <Partner lang={lan} />
        <Mission lang={lan} />
        <NavBar locale={lan} path={'/'} router={router} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://blogapi.ourbantaba.com/presses/all/en');
  const json = await res.json();
  return { press: json };
};
