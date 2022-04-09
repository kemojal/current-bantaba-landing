import React from 'react';
import { Img } from '../components/Img';
import styled from 'styled-components';
import Image from 'next/image';
const CardDiv = styled.div`
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0;
  .profile-frame {
    position: relative;
    width: 180px;
    height: 180px;
    overflow: hidden;
    border-radius: 50%
    box-shadow: 1.91534px 3.83069px 100px 1.91534px rgb(166 166 166 / 15%);
    border-radius: 50%;
    margin: 20px 0;
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
    letter-spacing: 0px;
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
`;
const MobileTestimobialCard = ({ src, name, position, text }) => {
  return (
    <CardDiv>
      <div className='img-col'>
        <div className='profile-frame'>
          <Image src={src} alt='logo' layout='fill' objectFit='contain' />
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
