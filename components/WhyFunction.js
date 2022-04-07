import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';

const WhyFunction = ({ text, subText, src, borderType, direction }) => {
  return (
    <Container borderType={borderType} direction={direction}>
      <div className='row'>
        <div className='icon-wrapper'>
          <Icon>
            <Img src={src} alt='logo' layout='fill' objectFit='contain' />
          </Icon>
        </div>
        <div className='col'>
          <p className='title'>{text}</p>
          <div className='discription'>{subText}</div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px;
  border-radius: 10px;
  margin-right: 15px;

  border-radius: 0px;
  position: relative;
  margin-bottom: 10px;

  .icon-wrapper {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 1%;
    border-left: ${({ borderType }) =>
      borderType ? '1px dashed #009743' : 'none'};
    left: 40px;
    top: 25px;
  }

  .row {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .col {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding-left: 10px;
  }
  p.title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px !important;
    text-align: left !important;
    /* line-height: 150%; */
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
    flex-direction: column;
    margin-right: auto;
    margin-bottom: 0;
    p {
      font-style: normal;
      font-family: 'Poppins';
      font-size: 20px;
    }
    .title {
      font-weight: 700;
      font-size: 40px;
      /* font-size: 37px; */
    }
    .discription {
      font-weight: 500;
      line-height: 160%;
      padding: 10px 0;
      font-weight: normal;
      /* font-weight: 500; */
      font-size: 18px;
      line-height: 150%;
      color: #5b615e;
      padding-bottom: 1.56rem;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      /* font-size: 20px; */
      /* line-height: 160%; */
      /* position: relative; */
      color: #5b615e;
    }
    .col {
      /* padding-left: 20px; */
      padding-top: 19px;
      padding-left: 0;
      padding-right: 0;
    }
    &:before {
      left: 49px;
      top: 18px;
      left: 39px;
    }
  }
`;
const Icon = styled.div`
  position: relative;
  height: 90px;
  width: 200px;

  @media (min-width: 600px) {
    height: 90px;
    width: 200px;
  }
`;
const FLabel = styled.p``;

export default WhyFunction;
