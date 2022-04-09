import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { PartnerCard } from '../components/PartnerCard';
import { PressCard } from '../components/PressCard';

import Fade from 'react-reveal/Fade';
import { FluidContainer } from '../components/FluidContainer';

const PartnerSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
  background-color: var(--white);

  .shadow {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .partner-title {
    width: 100%;
    text-align: center;

    letter-spacing: 0px;
    line-height: 27px;
    text-align: center;
    marginn-bottom: 20px;
  }

  .before {
    display: none;
  }

  @media (min-width: 1280px) {
    .before {
      display: block;

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 180px;
      background-color: #e8fcf0;
    }
    .shadow {
      z-index: 10;
      background: #ffffff;
      padding: 40px 0;
      box-shadow: 0px 10px 200px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding: 0 0px;
      max-width: var(--max-width);
    }
    .partner-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 130%;
      text-align: left;
      padding-left: 70px;
      text-align: center;

      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875px;
  flex-wrap: wrap;
  position: relative;
  width: calc(100vw - 20px);
  margin: 0 10px !important;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1280px) {
    width: 100%;
    max-width: 1000px;
    flex-wrap: nowrap;
    height: 50%;
    overflow-x: scroll;
    justify-content: space-between;
  }
`;

const partnersData = [
  {
    src: 'amazon.svg',
    title: 'Amazon',
  },
  {
    src: 'miro.svg',
    title: 'Miro',
  },
  {
    src: 'turku.svg',
    title: 'University of Turku',
    transpose: 'center',
  },

  // {
  //   src: 'sendgrid.svg',
  //   title: 'TWILIO SendGrid',
  // },
];
export const Partner = ({ lang }) => {
  const [partners, setPartners] = useState([]);

  const parthnerRef = useRef();

  async function getPartners() {
    const response = await fetch(
      'https://landingapi-dev.ourbantaba.com/partners/all'
    );
    const data = await response.json();
    setPartners(data.partners);
  }

  useEffect(() => {
    getPartners();
  }, []);
  return (
    <PartnerSection>
      <div className='before'></div>
      <div className='shadow'>
        <FluidContainer>
          <Fade bottom>
            <p className='notosans-bold-licorice-20px partner-title'>
              {lang.our_partners}
            </p>
          </Fade>
          <Fade bottom>
            <CardsContainer ref={parthnerRef}>
              {partners.map((item, index) => {
                // return <TestimonialCard key={index} {...item} />;
                return <PartnerCard key={index} {...item} />;
              })}
            </CardsContainer>
          </Fade>
        </FluidContainer>
      </div>
    </PartnerSection>
  );
};
