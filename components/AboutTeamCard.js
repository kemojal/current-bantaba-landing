import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Image from 'next/image';
import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const TeamContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  .about-team-img {
    position: relative;
    width: 145px;
    height: 148px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-team-img-inner {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .left {
    width: 45%;
  }
  .right {
    /* width: 55% */
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    /* align-items: center; */
    width: calc(100% - 45%);
  }
  .name,
  .position {
    width: 100%;
  }
  .position {
    padding: 5px 0;
  }
  .s-links {
    cursor: pointer;
    padding: 0px 0;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
  .s-icon {
    position: relative;
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  .s-email {
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 264px;
    margin: 10px;
    max-height: 368px;
    padding-bottom: 10px;
    filter: drop-shadow(0px 10px 100px rgba(0, 0, 0, 0.1));
    border-radius: 10px;
    background-color: white;

    max-width: calc(24.5% - 15px);

    &:first-child {
      margin-left: 0px;
    }

    .left {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
    }
    .right {
      width: 100%;
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      align-items: center;
    }
    .about-team-img {
      position: relative;
      width: 261px;
      height: 247px;

      width: 100%;
    }
    .about-team-img-inner {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .name {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      color: #011108;
      /* margin-top: 20px; */
    }
    .position {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      color: #01110870;
      /* margin-top: 5px; */
    }
    .s-links {
      align-items: center;
      justify-content: space-between;
      background-color: red;
      /* width: 100%; */
      width: 80px;

      /* height: 30px; */
      padding: 5px;
      background: linear-gradient(
        108.42deg,
        rgba(192, 250, 218, 0.1) 5.46%,
        rgba(71, 232, 143, 0.025) 80.51%
      );
      border: 0.46875px solid #039543;
      backdrop-filter: blur(89.0625px);
      /* border-radius: 9.375px; */
      border-radius: 18px;
      margin: 10px 0;
      margin-top: 5px;
      /* margin-left: calc(50% - 45px); */
      /* transform: translateX(calc( 100% )) */
    }
  }
  @media (max-width: 320px) {
    .about-team-img {
      position: relative;
      width: 116px;
      height: 148px;
      overflow: hidden;
    }
  }
`;
const AboutTeamCard = ({
  src,
  name,
  position,
  social,
  linkedinLink,
  email,
}) => {
  return (
    <TeamContainer>
      {/* src='/assets/images/kemo.jpg' */}
      <div className='left'>
        <Fade bottom>
          <div className='about-team-img'>
            <img
              class='about-team-img-inner'
              src={src}
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Fade>
      </div>
      <div className='right'>
        <Fade bottom>
          <p className='notosans-bold-licorice-20px name'>{name}</p>
        </Fade>
        <Fade bottom>
          <p className='notosans-medium-masala-16px position'>{position}</p>
        </Fade>
        <Fade bottom>
          <ul className='s-links'>
            <a target='_blank' href={linkedinLink} passHref={true}>
              <li className='s-icon'>
                <Img
                  src={'linkedin-d.svg'}
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                />
              </li>
            </a>

            <a target='_blank' href={`mailto:${email}`} passHref={true}>
              <li className='s-email'>
                <Img
                  src={'email-d.svg'}
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                />
              </li>
            </a>
          </ul>
        </Fade>
      </div>
    </TeamContainer>
  );
};

export default AboutTeamCard;
