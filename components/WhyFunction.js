import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';

const WhyFunction = ({ text, subText, src, borderType }) => {
  return (
    <Container borderType={borderType}>
      <div className='row'>
        <Icon>
          <Img src={src} alt='logo' layout='fill' objectFit='contain' />
        </Icon>
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
  /* background-color: #0097430d; */
  padding: 0px 0px;
  border-radius: 10px;
  margin-right: 15px;

  border-radius: 0px;
  position: relative;
  margin-bottom: 10px;
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
    /* margin: 38px 38px; */
    p {
      font-style: normal;
      font-family: 'Poppins';
      font-size: 20px;
    }
    .title {
      font-weight: 700;
      /* line-height: 125%; */
      font-size: 40px;
      /* color:  orange; */
    }
    .discription {
      font-weight: 500;
      line-height: 160%;
      padding: 10px 0;
      /* padding-bottom: 45px; */
      font-weight: normal;
      /* font-weight: 500; */
      font-size: 18px;
      line-height: 150%;
      color: #5b615e;
      padding-bottom: 1.56rem;
    }
    .col {
      padding-left: 20px;
    }
    &:before {
      left: 45px;
      top: 18px;
    }
  }
`;
const Icon = styled.div`
  position: relative;
  height: 90px;
  width: 200px;
  /* &:before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    position: absolute;
    transform: translate(-5px, -5px);
    border-radius: 50%;
  } */
  @media (min-width: 600px) {
    height: 90px;
    width: 200px;
  }
`;
const FLabel = styled.p``;

export default WhyFunction;
