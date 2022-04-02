import React from 'react';
import styled from 'styled-components';
import { ArrowButton } from '../components/ArrowButton';
import { FluidContainer } from '../components/FluidContainer';
import MobileTestimobialCard from '../components/MobileTestimobialCard';
import { TestimonialCard } from '../components/TestimonialCard';

import Fade from 'react-reveal/Fade';

const TestimonialSection = styled.section`
  /* background-color: var(--ottoman); */
  /* height: 80vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* padding: 2rem 0rem; */
  padding: 50px 0;
  /* padding-top: 0rem; */
  .fluid {
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    line-height: 32px;
    text-align: center;
    white-space: nowrap;
  }
  .desktop-arrow-container {
    display: none;
  }
  .mobile {
    display: inline-block !important;
  }
  .desktop {
    display: none !important;
  }

  @media (min-width: 1280px) {
    .fluid {
      /* max-width: 1200px; */
      /* max-width: 953px; */
      max-width: var(--max-width);
      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: center;

      position: relative;
    }
    h1 {
      width: 100%;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
      color: #011108;
    }
    .title {
      text-align: left;
    }
    .desktop-arrow-container {
      display: inline-block;
      position: relative;
      width: 150px;
    }
    .testimonial-header {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      margin-bottom: 4.375rem;
      padding: 5px 0;
    }
    .hide-on-desktop {
      display: none;
    }
    .desktop {
      display: inline-block !important;
    }
    .mobile {
      display: none !important;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  width: 100vw;
  /* height: 400px; */
  overflow-x: scroll;
  align-items: center;
  justify-content: center;
  position: relative;
  /* white-space: nowrap; */
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    width: 100%;
    max-width: 1150px ;
    /* max-width: var(--max-width); */
    overflow-x: scroll;
    padding: 10px 0;
    border-radius: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Testimonials = [
  {
    // src: 'mf1.svg',
    src: 'test-profile1.svg',
    name: 'Name Nameson',
    position: 'Startup name',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since..`,
  },
  {
    // src: 'mf2.svg',
    src: 'test-profile1.svg',
    name: 'Darlene Robertson',
    position: 'Startup name',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since..`,
  },
  {
    // src: 'mf1.svg',
    src: 'test-profile1.svg',
    name: 'Name Nameson',
    position: 'Startup Name',
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`,
  },
];
export const Testimonial = () => {
  return (
    <TestimonialSection>
      <div className='fluid'>
        <div className='testimonial-header'>
          <Fade bottom>
            <h1 className='notosans-bold-licorice-20px title'>
              What others say about Bantaba
            </h1>
          </Fade>
          <Fade bottom>
            <div className='desktop-arrow-container'>
              <ArrowButton position={'left'} top={'0'}/>
              <ArrowButton position={'right'} top={'0'}/>
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <div className='mobile'>
            <Cards>
              {Testimonials.map((item, index) => {
                return <MobileTestimobialCard key={index} {...item} />;
              })}
            </Cards>
          </div>
          <div className='desktop'>
            <Cards>
              {Testimonials.map((item, index) => {
                return <TestimonialCard key={index} {...item} />;
              })}
            </Cards>
          </div>
        </Fade>
        <div className='mobile'>
          <ArrowButton position={'left'} className='hide-on-desktop' />
          <ArrowButton position={'right'} className='hide-on-desktop' />
        </div>
      </div>
    </TestimonialSection>
  );
};
