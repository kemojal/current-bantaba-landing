import { useState, useContext, useEffect } from 'react';

import Head from 'next/head';


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
    justify-content: center !important;
    align-items: center !important;
    min-height: 906px;
    background: url('/assets/images/hero-bg.svg') no-repeat center center/50px
      50px fixed;
    background-size: cover !important;
    background-position-x: center;
    background-position-y: center;

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 0 !important;
      width: var(--max-width) !important;
    }
  }
  @media (min-width: 1500px) {
    position: relative;
    .container {
      display: flex;
      flex-direction: row;
      height: auto;
      position: relative;
      z-index: 10;

      display: flex;
      flex-direction: row;

      height: auto;
      adding-right: 0px;
    }
  }
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
// import JoinNewsLetterModal from '../components/JoinNewsLetterModal';

import { GlobalContext } from '../context/GlobalState';

export default function Home({ press }) {
  const router = useRouter();
  const { locale } = router;

  const { currentLanguage, setCurrentLanguage } = useContext(GlobalContext);

  const [lan, setlan] = useState(currentLanguage == 'en' ? en : fr);

  // const { currentLanguage } = useSelector((state) => state);

  useEffect(() => {
    setlan(currentLanguage == 'en' ? en : fr);
    // const browserlang = localStorage.getItem('browserLanguague');
    // if (browserlang) {
    //   setCurrentLanguage(browserlang);
    // } else {
    //   localStorage.setItem('browserLanguague', JSON.stringify(currentLanguage));
    // }
  }, [currentLanguage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bantaba | home</title>
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
        <NavBar currentlan={lan} locale={lan} path={'/'} router={router} />
      </main>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://blogapi.ourbantaba.com/presses/all/en');
  const json = await res.json();
  return { press: json };
};
