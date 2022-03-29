import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

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

  .featured-img-cover {
    /* background-color: yellow; */
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
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
  }
`;
const FeaturedBlogCard = () => {
  return (
    <FeaturedBlogCardContainer>
      <div className='featured-img-cover'>
        <Fade bottom>
          <div className='f-img-wrapper'>
            <Img
              src='featured-img-cover.svg'
              alt='logo'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Fade>
      </div>
      <div className='featured-body'>
        <Fade bottom>
          <p className='f-title'>
            How STEM education could solve Africa&#39;s problems
          </p>
        </Fade>
        <div className='f-category-row'>
          <Fade bottom>
            <p className='f-category'>Category</p>
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
              <span className='f-read-time-label'>Read 1 min</span>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className='f-summary-text'>
            STEM education worldwide is increasing in popularity—more schools
            are implementing STEM learning into their curriculum and making it
            an integral part of what they teach.
            <br />
            <br />
            If Africans solve problems and lead social and economic development
            in their own countries – rather than leaving it to international
            aid...
          </div>
        </Fade>
        <div className='read-button'>
          <Fade bottom>
            <Link href='/blogdetail'>
              <a>Read More</a>
            </Link>
          </Fade>
        </div>
      </div>
    </FeaturedBlogCardContainer>
  );
};

export default FeaturedBlogCard;
