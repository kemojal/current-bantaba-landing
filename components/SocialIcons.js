import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';

const IconDiv = styled.div`
  position: relative;
  cursor: pointer;
  width: ${({ scrDesktop }) => (scrDesktop ? '34px' : '30px')};
  height: ${({ scrDesktop }) => (scrDesktop ? '34px' : '30px')};

  @media (min-width: 1280px) {
    width: 34px;
    height: 34px;

  }
`;
const SocialIcons = ({ src, scrDesktop }) => {
  return (
    <>
      <IconDiv scrDesktop={scrDesktop}>
        {src && <Img src={src} alt='logo' layout='fill' objectFit='contain' />}
        {scrDesktop && (
          <Img src={scrDesktop} alt='logo' layout='fill' objectFit='contain' />
        )}
      </IconDiv>
    </>
  );
};

export default SocialIcons;
