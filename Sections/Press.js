import React from 'react';
import styled from 'styled-components';
import { ArrowButton } from '../components/ArrowButton';
import { PressCard } from '../components/PressCard';
import { Img } from '../components/Img';

import Fade from 'react-reveal/Fade';

const PressSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
  background-color: #fcf9e8;
  /* padding-top: 0rem; */
  h1 {
    width: 100%;
    text-align: center;
    /* padding: 10px 0; */
    line-height: 32px;
    margin-bottom: 28px;
  }
  .card-container {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* height: 500px; */
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    width: 100vw;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    /* scroll-padding: 50%; */
  }
  .show-on-mobile {
    display: block;
  }
  .show-on-desktop {
    display: none;
  }

  @media (min-width: 1280px) {
    background-color: #f9f9f9;
    .card-container {
      flex-direction: row;
      height: auto;
      width: 100%;
      /* max-width: 1153px; */
    }
    .fluid {
      /* max-width: 1200px; */
      max-width: 1150px;
      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* flex-direction: row; */
      /* padding: 40px 0; */
      position: relative;
    }
    .read-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 130%;
      text-align: left;
    }
    .press-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      /* padding: 10px 0; */
      margin-bottom: 3.125rem;
    }
    .view-all {
      display: flex;
      align-items: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      color: #009743;
    }
    .view-icon {
      position: relative;
      width: 36px;
      height: 36px;
    }

    .show-on-mobile {
      display: none;
    }
    .show-on-desktop {
      display: flex;
    }
  }
`;
export const Press = () => {
  return (
    <PressSection>
      <div className='fluid'>
        <Fade bottom>
          <h1 className='notosans-bold-licorice-20px show-on-mobile'>Press</h1>
          <div className='press-header show-on-desktop'>
            <div className='notosans-bold-licorice-20px read-title '>
              Read more about us
            </div>

            <div className='view-all'>
              <div className='view-icon'>
                <Img
                  src='view-all.svg'
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <span>View All</span>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className='card-container'>
            <PressCard />
            <PressCard />
            <PressCard />
            <PressCard />
            <PressCard />
          </div>
        </Fade>
        <ArrowButton position={'left'} />
        <ArrowButton position={'right'} />
      </div>
    </PressSection>
  );
};
