import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import Image from 'next/image';

import { GlobalContext } from '../context/GlobalState';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DesktopBlogCardContainer = styled.div`
  cursor: pointer;
  width: ${({ width }) => (width ? width : 'calc(50% - 15px)')};
  padding: 10px 0;
  background: #ffffff;
  box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
  border-radius: 10px;
  margin-top: ${({ mTop }) => (mTop ? mTop : '0')};
  margin-bottom: ${({ mBottom }) => (mBottom ? mBottom : '0')};
  margin-left: ${({ mLeft }) => (mLeft ? mLeft : '0')};
  margin-right: ${({ mRight }) => (mRight ? mRight : '0')};

  .blog-img-cover {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
  .b-img-wrapper {
    position: relative;
    width: 352px;
    height: 240.85px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
  }
  .blog-card-body {
    padding: 0 10px;
  }
  .blog-card-body {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #1c202a;
  }
  .category-row {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 22px 0;
    margin-bottom: 0;
  }
  .b-category {
    color: #009743;
    background: #f0f7f2;
    border-radius: 5px;
    padding: 0px 10px;
    margin-right: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
  }
  .read-time {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
  .read-time-icon {
    width: 26px;
    height: 26px;
    position: relative;
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
  .blog-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: #1c202a;
    margin-top: 20px;
    width: 100%;
  }
  @media (max-width: 1279px) {
    max-width: 355px;

    margin: 15px;
  }
  @media (max-width: 600px) {
    min-width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }
`;
const DesktopBlogCard = ({
  mTop,
  mBottom,
  mLeft,
  mRight,
  width,
  title,
  category,
  read_time,
  summary,
  cover_img,
  author,
  full_text,
  tags,
  related,
}) => {
  const { showBlogDetail, showBlogDetailFunction, setBlogDetailFunction } =
    useContext(GlobalContext);

  const [loaded, setLoaded] = useState(false);

  const imgSkeleton = loaded ? '' : 'skeleton';
  const handleLoaded = () => {
    setLoaded(true);
  };

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
      tags,
      related,
    });
  };
  return (
    <DesktopBlogCardContainer
      mTop={mTop}
      mBottom={mBottom}
      mLeft={mLeft}
      mRight={mRight}
      width={width}
      onClick={showDetail}
    >
      <div className='blog-img-cover'>
        
          <div className={`b-img-wrapper ${imgSkeleton}`}>
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
      <div className='blog-card-body'>
        {loaded ? (
          <p className='blog-title'>{title}</p>
        ) : (
          <Skeleton
            baseColor='#E8FCF0'
            height={27}
            highlightColor='#04853A25'
            count={2}
            className='blog-title'
          />
        )}
        <div className='category-row'>
          {loaded ? (
            <p className='b-category'>{category}</p>
          ) : (
            <Skeleton
              baseColor='#E8FCF0'
              height={19}
              width={72}
              highlightColor='#04853A25'
              className='b-category'
            />
          )}

          <div className='read-time'>
            <Fade>
              <div className='read-time-icon'>
                {loaded ? (
                  <Img
                    src='read-time-icon.svg'
                    alt='logo'
                    layout='fill'
                    objectFit='cover'
                  />
                ) : (
                  <Skeleton
                    baseColor='#E8FCF0'
                    height={26}
                    width={26}
                    borderRadius={26}
                    highlightColor='#04853A25'
                  />
                )}
              </div>
            </Fade>
            <Fade>
              {loaded ? (
                <span className='f-read-time-label'>Read {read_time}</span>
              ) : (
                <Skeleton
                  className='f-read-time-label'
                  baseColor='#E8FCF0'
                  height={18}
                  width={88}
                  highlightColor='#04853A25'
                />
              )}
            </Fade>
          </div>
        </div>
      </div>
    </DesktopBlogCardContainer>
  );
};

export default DesktopBlogCard;
