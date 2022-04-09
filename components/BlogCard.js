import React from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import Fade from 'react-reveal/Fade';

const BCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px 0px;
  scroll-snap-align: center;
  margin: 8px 20px;
  width: min( 50%, 300px);
  .wrapper {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 10px 0px;
    padding-top: 0;
    max-width: 330px;
    overflow: hidden;
    padding-bottom: 26px;
  }

  .profile-frame {
    position: relative;
    height: 235px;
    width: 330px;
    overflow: hidden;
  }

  .title {
    line-height: 26px;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    padding: 0 30px;
  }
  @media (max-width: 480px) {
    width: 98vw;
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
      padding: 6px 13px;
      text-align: center;
      border-radius: 6px;
      color: black;
      background-color: var(--narvik);
    font-weight: 600;
    text-transform: uppercase;
    line-height: 22px;
  }

  .source {
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    width: 50%;
    text-align: right:
    background-color: orange;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export const BlogCard = ({ title, category, cover_img, read_time }) => {
  return (
    <BCard>
      <Fade bottom>
        <div className='wrapper'>
          <div className='profile-frame'>
            <Img src={cover_img} alt='logo' layout='fill' objectFit='cover' />
          </div>

          <SourceRow>
            <Fade bottom>
              <div className='font category'> {category}</div>{' '}
            </Fade>
            <Fade bottom>
              <div className='notosans-normal-licorice-14px font source'>
                {read_time} read
              </div>
            </Fade>
          </SourceRow>

          <Fade bottom>
            <h3 className='notosans-bold-licorice-20px title'>{title}</h3>
          </Fade>
        </div>
      </Fade>
    </BCard>
  );
};
