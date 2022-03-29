import React from 'react';
import { Img } from '../components/Img';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  /* margin: 10px; */
  flex-wrap: wrap;
  margin-top: 0;
  /* .profile-frame {
    position: relative;
    width: 102px;
    height: 102px;
  } */
  .profile-frame {
    position: relative;
    width: 258px;
    height: 262px;
    /* width: 102px;
    height: 102px; */
  }
  .img-col {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .test-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .text {
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    /* display: inline-block; */
    /* word-break: break-word; */
    /* height: 300px; */
    line-height: 22px;
    padding: 0 15px;
  }
  .name {
    color: red;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xl);
    font-style: normal;
    font-weight: 600;
    /* font-weight: normal; */
    letter-spacing: 0px;
    /* line-height: 24px; */
    line-height: 33px;
    text-align: left;
    margin-bottom: 6px;
  }
  .position {
    text-align: center;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 9px;
  }

  /* @media (min-width: 1280px) {
    display: flex;
     flex-direction: row !important;
     background-color: pink;
     width: 558px;
  } */
`;
const MobileTestimobialCard = ({ src, name, position, text }) => {
  return (
    <CardDiv>
      <div className='img-col'>
        <div className='profile-frame'>
          <Img src={src} alt='logo' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='test-col'>
        <div>
          <h3 className='name'>{name}</h3>
          <h3 className='notosans-bold-licorice-18px position'>{position}</h3>
        </div>

        <div className='notosans-normal-licorice-16px text'>{text}</div>
      </div>
    </CardDiv>
  );
};

export default MobileTestimobialCard;
