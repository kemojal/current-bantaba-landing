import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Img } from '../components/Img';
const CardDiv = styled.div`
  /* box-sizing: border-box; */
  /* width: 300px !important; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */
  /* background-color: orange; */
  /* margin: 0 20px; */
  /* border: 1px solid green; */

  .profile-frame {
    position: relative;
    /* width: 258px; */
    /* height: 262px; */
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
    /* font-size: 24px; */
  }
  .text {
    /* letter-spacing: 0px;
    line-height: 16px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-s);
    font-style: normal;
    font-weight: 400;
    text-align: center;
    position: relative;
    width: 100%;
    padding: 10px ; */
    /* background-color: orange; */
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: green;
    /* width: 500px; */
    ÷flex-wrap: nowrap;
    margin-left: 12.5px;
    background: #ffffff;
    border: 1px solid rgba(1, 17, 8, 0.1);
    border-radius: 10px;

    .img-col {
      width: 135px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-frame {
      position: relative;
      /* width: 102px; */
      height: 102px;
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
      padding-bottom: 20px;
      height: 5.44rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .name {
      margin-top: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: #011108;
      padding: 0;
    }
    .position {
      margin-top: 15px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      padding: 0;
      /* or 22px */

      /* Paragraph */

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
  /* background: green; */
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 10px;
    width: 423px;
    position: relative;
    .col-flip-desktop{
      display: flex;
      flex-direction: column-reverse;
    }
    &::before {
      content: '';
      position: absolute;
      width: 370px;
      height: 167px;
      /* right: -260px; */
      background: url('/assets/images/quotation.svg') no-repeat;
      /* background-size: 100% 100%; */
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
    /* background-color: orange; */
    &:before{
        position: absolute;
        top: 0;
        width: 100px;
        height: 100px;
        content: '';
        left: 0px;
        z-index: 100;
        /* background-color: orange; */
        /* content: "\275D";  */
}
`;
export const TestimonialCard = ({ src, name, position, text }) => {
  return (
    <CardDiv>
      <div className='img-col'>
        <Fade bottom>
          <div className='profile-frame'>
            <Img src={src} alt='logo' layout='fill' objectFit='contain' />
          </div>
        </Fade>
      </div>

      <TestCol>
        <Fade right>
          <div className='col-flip-desktop'>
            <h3 className='name'>{name}</h3>
            <h3 className='position'>{position}</h3>
          </div>
        </Fade>
        <Fade right>
          <p className='notosans-normal-licorice-16px text'>{text}</p>
        </Fade>
      </TestCol>
    </CardDiv>
  );
};
