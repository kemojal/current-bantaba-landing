import React, { useContext } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Image from 'next/image';

import { GlobalContext } from '../context/GlobalState';

const FeaturedBlogCardContainer = styled.div`
  width: 100%;
  /* width: 754px; */
  /* height: 774px; */
  background: #ffffff;
  box-shadow: 1.91534px 3.83069px 100px rgba(166, 166, 166, 0.15);
  border-radius: 10px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .featured-img-cover {
    /* background-color: yellow; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    /* border-radius: 10px;
    overflow: hidden; */
  }
  .f-img-wrapper {
    /* width: 696px;
    height: 362px; */

    /* width: 697px; */
    /* height: 350px; */

    /* tuned-values */
    width: 766px;
    height: 385px;

    /* width: 100%; */
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .featured-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
  }
  .f-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
    color: #011108;
  }
  .f-category-row {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 22px 0;
  }
  .f-category {
    color: #009743;
    background: #f0f7f2;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 5px;
  }
  .f-summary-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #5b615e;
  }

  .f-read-time {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
  .f-read-time-label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: right;
    margin-left: 10px;
  }
  .read-time-icon {
    width: 26px;
    height: 26px;
    position: relative;
  }
  .read-button {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-decoration-line: underline;
    color: #009743;
    margin-top: 20px;
    cursor: pointer;
  }
  @media (max-width: 1279px) {
    max-width: 98%;
  }
  .featured-body {
    padding: 10px;
  }
  .f-img-wrapper {
    width: 100vw;
    height: 173px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const FeaturedBlogCard = ({
  title,
  category,
  read_time,
  summary,
  cover_img,
  author,
  full_text,
}) => {
  const { showBlogDetail, showBlogDetailFunction, setBlogDetailFunction } =
    useContext(GlobalContext);

  const showDetail = () => {
    showBlogDetailFunction(true);
    setBlogDetailFunction({
      title,
      category,
      read_time,
      full_text,
      summary,
      cover_img,
      author,
    });
  };

  return (
    <FeaturedBlogCardContainer>
      <div className='featured-img-cover'>
        <Fade bottom>
          <div className='f-img-wrapper'>
            <Image src={cover_img} alt='logo' layout='fill' objectFit='cover' />
          </div>
        </Fade>
      </div>
      <div className='featured-body'>
        <Fade bottom>
          <p className='f-title'>{title}</p>
        </Fade>
        <div className='f-category-row'>
          <Fade bottom>
            <p className='f-category'>{category}</p>
          </Fade>
          <div className='f-read-time'>
            <Fade bottom>
              <div className='read-time-icon'>
                <Img
                  src='read-time-icon.svg'
                  alt='logo'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </Fade>
            <Fade bottom>
              <span className='f-read-time-label'>Read {read_time}</span>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
            className='f-summary-text'
          />
        </Fade>
        <div onClick={showDetail} className='read-button'>
          <Fade bottom>
            <span>
              <a>Read More</a>
            </span>
          </Fade>
        </div>
      </div>
    </FeaturedBlogCardContainer>
  );
};

export default FeaturedBlogCard;
