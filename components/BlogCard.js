import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';

const BCard = styled.div`
  width: 96vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 30px; */
  margin: 8px 0px;
  scroll-snap-align: center;
  .wrapper {
    background-color: var(--white);
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 10px 0px;
    padding-top: 0;
    max-width: 330px;
    /* max-width: 95vw; */
    overflow: hidden;
    padding-bottom: 26px;
    /* height: 100%; */
  }
  /* border: 1px solid green; */

  .profile-frame {
    position: relative;
    /* width: 88vw; */
    /* height: 335px; */
    height: 235px;
    width: 330px;
    overflow: hidden;
  }

  .title {
    /* color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 18px;
    text-align: left;
    padding: 10px 0;
    text-align: center; */
    /* font-size: 24px; */

    line-height: 26px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    /* padding: 0 10px; */
    padding: 0 30px;
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: auto;
    margin: 0 30px;

    .wrapper {
      width: 362px;
      height: auto;
      margin
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
`;
const SourceRow = styled.div`
  width: 80%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  
  align-items: center;

  .source-img {
    position: relative;
    width: 25px;
    height: 25px;
  }
  .font{
    color: var(--onyx);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-s);
    font-style: normal;
  }
  .category{
      /* width: 50%; */
      padding: 6px 13px;
      text-align: center;
      border-radius: 6px;
      color: black;
      background-color: var(--narvik);
    font-weight: 600;
    text-transform: uppercase;
    line-height: 22px;
      /* padding-left: 25px; */
  }

  .source {
    font-weight: 400;

    /* color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xs);
    font-style: normal;
    font-weight: 400; */
    letter-spacing: 0px;
    line-height: 24px;
    /* padding: 5px 0; */
    /* padding-left: 5px; */
    width: 50%;
    text-align: right:
    /* margin-right: 25px; */
    background-color: orange;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export const BlogCard = () => {
  return (
    <BCard>
      <Fade bottom>
        <div className='wrapper'>
          <div className='profile-frame'>
            <Img
              src='press-1.png'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </div>

          <SourceRow>
            <Fade bottom>
              <div className='font category'> Category</div>{' '}
            </Fade>
            {/* <div className='source-img'>
            <Img
              src='source-img.png'
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          </div> */}
            <Fade bottom>
              <div className='notosans-normal-licorice-14px font source'>
                3 mins read
              </div>
            </Fade>
          </SourceRow>

          <Fade bottom>
            <h3 className='notosans-bold-licorice-20px title'>
              New admissions round to SSE Business Lab - star jury backs 8
              companies
            </h3>
          </Fade>
          {/* <P className='notosans-normal-licorice-16px'>
          When the star-studded Board of Admissions of SSE BusinessLab, the
          venture incubator of the Stockholm School of Economics, gathered to
          assess the latest applicants, a total of 8 companies were given
          positive news. As such, these teams are today entering the prestigious
          incubator today. …
        </P> */}
        </div>
      </Fade>
    </BCard>
  );
};
