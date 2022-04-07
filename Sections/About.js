import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Img } from '../components/Img';
import Link from 'next/link';
import { LinkContainer } from '../components/LinkContainer';

const AboutSectionContainer = styled.section`
  background-color: white;
  /* min-height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  /* padding-top: 2rem; */
  /* padding-bottom: 3.125rem; */
  padding: 50px 2rem;

  .container {
    width: 100vw;
  }

  .about-left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-right {
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
  }
  .about-img {
    position: relative;
    width: 351px;
    /* height: 416px; */
    height: 270px;
  }
  p.title {
   

    margin: 10px 0;
    
    margin-bottom: 0;
    padding: 25px 0;
    


    font-size: 26px;
    margin: 10px 0;
    margin-top: 40px;
    color: rgba(19, 19, 19, 1);
    padding: 0; */

    /* kidas design */
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.00px;
    line-height: 30px;
    text-align: center;
  }
  p.normal {
    margin: 10px 0;
    margin-top: 0;
    margin-bottom: 20px;
    

    letter-spacing: 0.00px;
    line-height: 28px;
    text-align: left;
  }

  
  .hide-on-mobile {
    display: none;
  }
  .link {
   
    display: flex;
    justify-content: center;
    color: var(--fun-green);
    color: #005225;
    font-family: var(--font-family-noto_sans) !important;
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }
  .link a{
    font-family: var(--font-family-noto_sans) !important;
    
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0rem;
    background-color: var(--ottoman);
    .container {
      max-width: var(--max-width);
      display: flex;
      flex-direction: row;
      padding: 6.25rem 0;
    }
    .about-left {
      width: 50%;
    }
    .about-right {
      width: 50%;
      padding: 0px;
      padding-left: 50px;
    }
    .about-img {
      position: relative;
      width: 609px;
      /* height: 416px; */
      height: 465px;
    }
    p.title {
      line-height: 105%;
      text-align: left;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      margin: 10px 0;
      margin-bottom: 0;
      padding: 25px 0;
      line-height: 130%;
    }
    p.normal {
      
      margin-top: 0;
      margin-bottom: 12px;
     

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 160%;
      color: #5B615E;
    }
    .hide-on-mobile {
      display: inline-block;
    }
    .desktop-spacer{
      width: 1px;
      height: 1.9rem;
    }
  }

  
`;

const ArrowIcon = styled.div`
  position: relative;

  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const AboutSection = ({ lang }) => {
  return (
    <AboutSectionContainer>
      <div className='container'>
        <div className='about-left'>
          <div className='about-img'>
            <Img
              src='about-pic-3.svg'
              alt='about bantaba'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>

        <div className='about-right'>
          <p className='title'>{lang.bantaba_born_passion}</p>

          <div>
            <p className='notosans-normal-licorice-18px normal'>
              {lang.about_section_p1}
            </p>

            <p className='notosans-normal-licorice-18px normal'>
              {lang.about_section_p2}
            </p>

            <p className='hide-on-mobile notosans-normal-licorice-18px normal'>
              {lang.about_section_p3_desktop}
            </p>

            <div className='desktop-spacer' />

            <LinkContainer>
              <Link
                className='link'
                href={'https://community.ourbantaba.com/en/register'}
              >
                <a>{lang.lets_build_africa}</a>
              </Link>
              <ArrowIcon>
                <Img
                  src='arrow-green.svg'
                  alt='logo'
                  layout='fill'
                  objectFit='contain'
                />
              </ArrowIcon>
            </LinkContainer>
          </div>
        </div>
      </div>
    </AboutSectionContainer>
  );
};
