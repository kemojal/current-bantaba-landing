import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';

import Image from 'next/image';
const PCard = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 30px; */
  margin: 0px 30px;
  scroll-snap-align: center;
  .wrapper {
    background-color: var(--white);
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 3px 6px #00000029;
    padding-bottom: 26px;
    height: 100%;
    /* padding: 10px 0px; */
    /* height: 100%; */

    /* max-width: 330px; */
    max-width: 100%;
  }
  /* border: 1px solid green; */

  .profile-frame {
    position: relative;
    width: 88vw;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    width: 350px;
    height: 248px;

    width: 350px;
    height: 259px;
    border-bottom: 2px solid #0000002e;
  }

  .title {
    line-height: 26px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    /* padding: 0 10px; */
    padding: 0 30px;
    margin-top: 18px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 60px;
  }
  .ellipse-text {
    height: 100px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 4 !important;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .read-more {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 30px;
    margin-top: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: #009743;
  }
  .readmore-icon {
    position: relative;
    width: 10px;
    height: 10px;
    margin-left: 0.5625rem;
  }

  .source {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 5px;
    line-height: 160%;
    color: #5b615e;
  }
  @media (min-width: 1280px) {
    width: 300px;
    width: 31%;
    max-width: 360px;
    height: 500px;
    margin: 0 15px;
    .wrapper {
      width: 100%;
      overflow: hidden;
    }

    .profile-frame {
      position: relative;
      height: 248px;
      width: 350px;
      overflow: hidden;
      border-top-left-radius: 10px;
      border-radius-top-right-radius: 10px;
    }
  }
`;
const P = styled.p`
  color: var(--licorice);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 400;
  text-align: center;
  position: relative;
  text-align: left;
  padding: 10px 30px;

  line-height: 16px;

  width: 100%;
  /* background-color: green; */
  @media (min-width: 1280px) {
    font-family: 'Poppins' !important;
    font-style: normal;
    font-size: 16px !important;
    line-height: 150% !important;
    margin: 16px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2 !important;
    /* height: 60px !important; */
  }
`;
const SourceRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  padding-top: 5px;

  .source-img {
    position: relative;
    /* width: 25px;
    height: 25px; */

    width: 60px;
    height: 60px;
  }
  .source {
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xs);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 19px;
    padding: 5px 0;
  }

  @media (min-width: 1280px) {
    .source {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      padding-left: 5px;
      line-height: 160%;
      color: #5b615e;
    }
  }
`;
//
export const PressCard = ({ title, author, author_image, cover_img, link }) => {
  return (
    <PCard>
      <div className='wrapper'>
        <div className='profile-frame'>
          <Image src={cover_img} alt='logo' layout='fill' objectFit='cover' />
        </div>
        <SourceRow>
          <div className='source-img'>
            <Image
              src={author_image}
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h3 className='notosans-normal-licorice-14px source'>{author}</h3>
        </SourceRow>

        <h3 className='notosans-bold-licorice-20px title'>{title}</h3>
        <P className='notosans-normal-licorice-16px ellipse-text'>
          When the star-studded Board of Admissions of SSE BusinessLab, the
          venture incubator of the Stockholm School of Economics, gathered to
          assess the latest applicants, a total of 8 companies were given
          positive news. As such, these teams are today entering the prestigious
          incubator today. …
        </P>
        <a href={link} target='_blank'>
          <div className='read-more'>
            <span>Read More</span>
            <div className='readmore-icon'>
              <Img
                src='read-more-icon.svg'
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </a>
      </div>
    </PCard>
  );
};
