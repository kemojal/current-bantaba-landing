import React, { useRef } from 'react';
import styled from 'styled-components';
import { ArrowButton } from '../components/ArrowButton';
import { PressCard } from '../components/PressCard';
import { Img } from '../components/Img';

const PressSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
  background-color: #fcf9e8;
  h1 {
    width: 100%;
    text-align: center;
    line-height: 32px;
    margin-bottom: 28px;
  }
  .card-container {
    scroll-behavior: smooth;
    transition: all 0.2s ease-in-out;: ;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    width: 100vw;
    scroll-snap-type: x mandatory;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .show-on-mobile {
    display: block;
  }
  .show-on-desktop {
    display: none;
  }

  @media (min-width: 1280px) {
    background-color: #f9f9f9;
    background-color: white;
    .card-container {
      flex-direction: row;
      height: auto;
      width: 100%;
    }
    .fluid {
      max-width: var(--max-width);

      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .read-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
      text-align: left;
    }
    .press-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
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
      display: none;
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
export const Press = ({ press, lang }) => {
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  return (
    <PressSection id='press'>
      <div className='fluid'>
        <h1 className='notosans-bold-licorice-20px show-on-mobile'>{lang.press_mobile}</h1>
        <div className='press-header show-on-desktop'>
          <h1 className='notosans-bold-licorice-20px read-title '>
            {lang.Read_more_about_us_desktop}
          </h1>

          <div className='view-all'>
            <div className='view-icon'>
              <Img
                src='view-all.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <span>{lang.view_all_desktop}</span>
          </div>
        </div>

        <div className='card-container' ref={scrollRef}>
          {press.press.map((item, index) => {
            return <PressCard key={index} {...item}/>;
          })}
        </div>

        <span onClick={() => scroll(380)}>
          <ArrowButton position={'left'} />
        </span>
        <span onClick={() => scroll(-380)}>
          <ArrowButton position={'right'} />
        </span>
      </div>
    </PressSection>
  );
};
