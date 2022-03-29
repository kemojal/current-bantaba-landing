import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const DesktopBlogCardContainer = styled.div`
  width:${({ width }) => (width ? width : 'calc(50% - 15px)')}; 
  padding: 20px 0;
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
    /* padding: 10px 0; */
    /* background-color: yellow; */
  }
  .b-img-wrapper {
    position: relative;
    /* width: 322px;
    height: 214.85px; */

    /* tuned-image */
    width: 352px;
    height: 240.85px;
  }
  .blog-card-body {
    padding: 0 25px;
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
  }
`;
const DesktopBlogCard = ({ mTop, mBottom, mLeft, mRight, width }) => {
  return (
    <DesktopBlogCardContainer
      mTop={mTop}
      mBottom={mBottom}
      mLeft={mLeft}
          mRight={mRight}
          width={width}
    >
      <div className='blog-img-cover'>
        <Fade bottom>
          <div className='b-img-wrapper'>
            <Img
              src='b-cover-1.svg'
              alt='logo'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Fade>
      </div>
      <div className='blog-card-body'>
        <Fade bottom>
          <p className='blog-title'>
            Why you should mentor a start-up in Africa
          </p>
        </Fade>
        <div className='category-row'>
          <Fade bottom>
            <p className='b-category'>Diaspora</p>
          </Fade>
          <div className='read-time'>
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
              <span className='f-read-time-label'>Read 1 min</span>
            </Fade>
          </div>
        </div>
      </div>
    </DesktopBlogCardContainer>
  );
};

export default DesktopBlogCard;
