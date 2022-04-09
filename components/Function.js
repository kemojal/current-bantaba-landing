import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';

const Function = ({ text, src }) => {
  return (
    <Container>
      <Icon>
        <Img
          src={src}
          alt='logo'
          layout='fill'
          objectFit='contain'
        />
      </Icon>
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px;
  border-radius: 10px;
  margin-right: 15px;
  p {
    padding-left: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    text-align: left;
    vertical-align: top;
    font-size: 20px;
   line-height: 125%;
    color: #001108;
  }
  @media (min-width: 600px) {
    justify-content: space-between;
    margin-right: auto; 
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 20px !important;
      line-height: 125%;
    }
  }
`;
const Icon = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  @media (min-width: 600px) {
    height: 40px;
    width: 40px;
  }
`;
const FLabel = styled.p``;

export default Function;
