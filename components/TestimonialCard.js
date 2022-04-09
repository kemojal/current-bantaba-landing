import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';
import Image from 'next/image';
const CardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  

  .profile-frame {
    position: relative;
   
    width: 102px;
    height: 102px;
  }
  .name {
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xl);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    padding: 5px 0;
  }
  .position {
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 18px;
    text-align: left;
    padding: 10px 0;
  }
  .text {
   
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

   
    margin-left: 12.5px;
    background: #ffffff;
    border: 1px solid rgba(1, 17, 8, 0.1);
    border-radius: 10px;
    max-width: 558px;

    .img-col {
      width: 135px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-frame {
      position: relative;
      height: 102px;
      border-radius: 50%;
      background-color: #009a3650;
      overflow: hidden;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgb(166 166 166 / 15%);
    }
    .text {
      border-bottom: 1px solid #dfe2e6;
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      letter-spacing: -0.03em;
      color: #5b615e;

      padding: 5px;
      padding-top: 10px;
      padding-bottom: 15px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 75%;
    }
    .name {
      margin-top: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
      color: #011108;
      padding: 0;
    }
    .position {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      padding: 0;

      color: #5b615e;
    }
  }
`;
const TestCol = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 10px;
    padding-bottom: 5px;
    width: 423px;
    position: relative;
    .col-flip-desktop {
      display: flex;
      flex-direction: column;
      padding-top: 5px;
    }
    &::before {
      content: '';
      position: absolute;
      width: 370px;
      height: 167px;
      background: url('/assets/images/quotation.svg') no-repeat;
      
    }
  }
`;
const P = styled.p`
    letter-spacing: 0px;
    line-height: 16px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400;
    text-align: center;
    position: relative;
    width: 100%;
    &:before{
        position: absolute;
        top: 0;
        width: 100px;
        height: 100px;
        content: '';
        left: 0px;
        z-index: 100;
        
}
`;
export const TestimonialCard = ({ src, name, position, text }) => {
  return (
    <CardDiv>
      <div className='img-col'>
        <div className='profile-frame'>
          <Image src={src} alt='logo' layout='fill' objectFit='contain' />
        </div>
      </div>

      <TestCol>
        <div className='col-flip-desktop'>
          <h3 className='name'>{name}</h3>
          <h3 className='position'>{position}</h3>
        </div>

        <p className='notosans-normal-licorice-16px text'>{text}</p>
      </TestCol>
    </CardDiv>
  );
};
