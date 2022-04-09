import React from 'react';
import styled from 'styled-components';

import { Img } from '../components/Img';
import Link from 'next/link';
const ButtonArrow = ({
  title,
  isArrow,
  bgcolor,
  color,
  href,
  type,
  width,
  maxWidth,
  maxHeight,
  fontSize,
  mRight,
}) => {
  return (
    <Link href={href ? href : '/'} passHref={true}>
      <Button
        isArrow={isArrow}
        bgcolor={bgcolor}
        color={color}
        type={type}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        width={width}
        mRight={mRight}
      >
        <Text fontSize={fontSize} isArrow={isArrow} className='btn-title'>
          {title}
        </Text>
        {isArrow && (
          <ArrowWrapper>
            <Img
              priority={true}
              src='arrow.svg'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </ArrowWrapper>
        )}
      </Button>
    </Link>
  );
};

const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #009743;
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : 'var(--fun-green);'};
  border: ${({ bgcolor }) => (bgcolor ? '1px solid #009743' : 'none')};
  border: ${({ type }) => (type == 'no border' ? 'none' : '1px solid #009743')};
  max-width: 90vw;
  margin: 10px 0;
  height: 60px;
  width: ${({ width }) => (width ? width : '260px')};
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  .btn-title {
    font-weight: 600;
    color: ${({ color }) => (color ? color : '#ffffff')} !important;
  }
  &:hover{
    transform: translateY(-4px) scale(1.01);

  }
  @media (min-width: 600px) {
    width: ${({ width }) => (width ? width : '260px')};
    max-width: 320px;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '320px')};
    margin-right: ${({ mRight }) => (mRight ? mRight : '26px !important')};
    max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '66px')};
    border-radius: 6px;

    .btn-title {
      font-weight: 600;
    }
  }
`;
const Text = styled.p`
  text-align: center;
  font-family: 'Poppins';
  color: white;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.133;

  color: var(--white);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 400;
  height: 29px;
  left: 44px;
  letter-spacing: 0px;
  line-height: 32px;
  text-align: left;
  margin-right: ${({ isArrow }) => (isArrow ? '20px' : '0')};
  @media (min-width: 600px) {
    margin-right: ${({ isArrow }) => (isArrow ? '10px' : '0')};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '20px')};
    line-height: 150%;
    color: #ffffff;
  }
`;
const ArrowWrapper = styled.div`
  position: relative;
  height: 12px;
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    width: 40px;
    height: 0px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    content: '';
  }
`;

export default ButtonArrow;
