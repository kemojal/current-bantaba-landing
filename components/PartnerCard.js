import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Image from 'next/image';
const PnCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 67.5px;
  scroll-snap-align: center;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 10px 0px;
  }

  .profile-frame {
    position: relative;
    width: auto;
    height: 47px;
  }

  .title {
    padding-top: 10px;
    letter-spacing: 0px;
    line-height: 25px;
    text-align: center;
    white-space: nowrap;
    margin-top: 3px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    .title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #5b615e;

      width: 100%;
    }

    .profile-frame {
      position: relative;
      width: 99px;
      height: 102px;
      margin-left: ${({ transpose }) =>
        transpose ? 'calc(50% - 49.5px)' : '0'};
    }
    .title {
      font-size: 22px;
    }
  }
`;

export const PartnerCard = ({ src, title, transpose }) => {
  return (
    <PnCard transpose={transpose}>
      <div className='wrapper'>
        <div className='profile-frame'>
          <Image src={src} alt='logo' layout='fill' objectFit='contain' />
        </div>
        <h3 className='notosans-normal-licorice-18px title'>{title}</h3>
      </div>
    </PnCard>
  );
};
