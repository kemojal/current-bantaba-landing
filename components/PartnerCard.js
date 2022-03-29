import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
const PnCard = styled.div`
  /* width: 80px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 30px; */
  margin: 30px 67.5px;
  /* margin: 0 28.75px; */
  scroll-snap-align: center;
  .wrapper {
    width: 100%;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    /* box-shadow: 0px 3px 6px #00000029; */
    padding: 10px 0px;
    /* height: 100%; */
  }
  /* border: 1px solid green; */

  .profile-frame {
    position: relative;
    width: auto;
    height: 47px;
    /* max-height: 47px; */
  }

  .title {
    /* line-height: 18px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px; */
    padding-top: 10px;
    letter-spacing: 0px;
    line-height: 25px;
    text-align: center;
    white-space: nowrap;
    margin-top: 3px;
    /* padding: 0 10px; */
  }

  @media (min-width: 1280px) {
    /* background-color: red; */
    /* width: 99px; */

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
      /* tuned-sized */
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
          <Img src={src} alt='logo' layout='fill' objectFit='contain' />
        </div>
        <h3 className='notosans-normal-licorice-18px title'>{title}</h3>
      </div>
    </PnCard>
  );
};
