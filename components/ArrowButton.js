import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';

const Button = styled.button`
  width: 45px;
  height: 45px;
  background-color: var(--ottoman);
  /* background-color: white; */
  border-radius: 50px;
  box-shadow: 0px 3px 6px #00000017;
  border: none;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  top: ${({ top }) => (top ? top : '50%')};
  left: ${({ position }) =>
    position == 'left' ? '10px' : 'calc(100% - 55px)'};
  transform: ${({ position }) =>
    position == 'left' ? 'scaleX(1)' : 'scaleX(-1)'};
  /* border: none; */
  /* .arrow-img {
    position: relative;
    width: 24px;
    height: 18px;
  } */

  .arrow-img {
    position: relative;
    width: 17px;
    height: 13px;
  }
  &:hover {
    background-color: #e2f6eb;
  }
`;
export const ArrowButton = ({ position, top }) => {
  return (
    <Button position={position} top={top}>
      <div className='arrow-img'>
        <Img
          src='arrow-next-mobile.svg'
          alt='arrow'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </Button>
  );
};
