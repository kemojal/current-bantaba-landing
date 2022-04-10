import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Image from 'next/image';

import { GlobalContext } from '../context/GlobalState';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FeaturedBlogCardContainer = styled.div`
  width: 100%;
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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }
  .f-img-wrapper {
    width: 766px;
    height: 385px;

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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
  tags,
  related,
  read_more,
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
      related,
    });
  };

  const [loaded, setLoaded] = useState(false);
  const imgSkeleton = loaded ? '' : 'skeleton';

  const handleLoaded = () => {
    setLoaded(true);
  };

  return (
    <FeaturedBlogCardContainer>
      <div className='featured-img-cover'>
        <div className={`f-img-wrapper ${imgSkeleton}`}>
          <Image
            src={cover_img}
            alt='logo'
            layout='fill'
            objectFit='cover'
            onLoad={(e) => {
              e.target.src.indexOf('data:image/gif;base64') < 0 &&
                handleLoaded();
            }}
          />
        </div>
      </div>
      <div className='featured-body'>
        {loaded ? (
          <p className='f-title'>{title}</p>
        ) : (
          <Skeleton
            baseColor='#E8FCF0'
            height={28}
            width={713}
            highlightColor='#04853A25'
            className='f-title'
          />
        )}

        <div className='f-category-row'>
          {loaded ? (
            <p className='f-category'>{category}</p>
          ) : (
            <Skeleton
              baseColor='#E8FCF0'
              height={32}
              width={135}
              highlightColor='#04853A25'
              className='f-category'
            />
          )}

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
            {loaded ? (
              <span className='f-read-time-label'>Read {read_time}</span>
            ) : (
              <Skeleton
                baseColor='#E8FCF0'
                height={18}
                width={87}
                highlightColor='#04853A25'
                className='f-read-time-label'
              />
            )}
          </div>
        </div>
        {loaded ? (
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
            className='f-summary-text'
          />
        ) : (
          <Skeleton
            baseColor='#E8FCF0'
            height={28}
            count={3}
            highlightColor='#04853A25'
            className='f-summary-text'
          />
        )}

        {loaded ? (
          <div onClick={showDetail} className='read-button'>
            <span>
              <a>{read_more}</a>
            </span>
          </div>
        ) : (
          <Skeleton
            baseColor='#E8FCF0'
            height={25}
            width={97}
            highlightColor='#04853A25'
            className='read-button'
          />
        )}
      </div>
    </FeaturedBlogCardContainer>
  );
};

export default FeaturedBlogCard;
