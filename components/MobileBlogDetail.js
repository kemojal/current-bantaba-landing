import React from 'react';
import styled from 'styled-components';
import { Img } from './Img';
import Fade from 'react-reveal/Fade';
import SocialContainer from './SocialContainer';

const MobileBlogDetailContainer = styled.div`
  position: fixed;

  width: 100vw;
  min-height: 100vh;
  background-color: white;
  overflow-y: auto;
  z-index: 99;
  top: 50px;
  left: 0;
  right: 0;
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  .blog-title {
    ont-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #011108;
  }
  .imageWrapper {
    position: relative;
    /* width: 1146px;
      height: 583px; */

    width: 96vw;
    height: 184px;
    margin-top: 20px;
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
    margin-left: 70px;
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
    font-size: 12px;
    line-height: 130%;
    text-align: right;
    margin-left: 10px;
  }
  .blog-text-container {
    padding-top: 20px;
    width: 100%;
    max-width: 100vw;
  }
  .text-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
  }
  .normal-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #5b615e;
  }
`;
export const MobileBlogDetail = () => {
  const socialList = [
    {
      scrDesktop: 'twiiter-d.svg',
    },
    {
      scrDesktop: 'facebook-d.svg',
    },
    {
      scrDesktop: 'instagram-d.svg',
    },
    {
      scrDesktop: 'linkedin-d.svg',
    },
  ];
  return (
    <MobileBlogDetailContainer>
      <p className='blog-title'>
        How STEM education could solve Africa&#39;s problems
      </p>
      <div className='imageWrapper'>
        <Img
          src='detail-blog-img-1.svg'
          alt='logo'
          layout='fill'
          objectFit='cover'
        />
      </div>
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
      <div className='blog-text-container'>
        <Fade bottom>
          <p className='text-title'>Fosters ingenuity and creativity:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Students learn in a safe environment during STEM education
            activities that allow them to fall and try again. STEM education
            stresses the value of failure as a learning exercise, which will
            enable students to embrace mistakes as part of the learning process.
            This allows students to build confidence and resilience, which will
            enable them to keep going when the going gets rough. After all,
            failure is part of a process that ultimately leads to success.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Builds resilience:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Ingenuity and creativity can pair with STEM and lead to new ideas
            and innovations. Without ingenuity and creativity, the recent
            developments in artificial intelligence or digital learning would
            not be possible. These technologies were created by people who
            learned that the human mind can achieve it if the human mind can
            conceive it.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Encourages experimentation:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Without a little risk-taking, and experimentation, many of the
            technological advancements that have occurred in the last couple of
            decades would not be possible. Many of these innovations were
            created by people who were told that their ideas wouldn’t work and
            their response was, “Let’s try it and see.” This type of attitude
            can be encouraged with STEM learning by allowing students to
            experiment and take risks during learning activities.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Encourages teamwork:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            STEM education can be taught to students of all ability levels.
            Students of varying levels of ability can work together in teams to
            find solutions to problems, record data, write reports, give
            presentations, etc. The end result is students who understand how to
            collaborate with others and thrive in a team-oriented environment.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Encourages knowledge application:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            In STEM education, students are taught skills that they can use in
            the real world. This motivates students to learn, as they know that
            the skills that they acquire can be utilized immediately, and in
            ways that positively impact them and their loved ones. The ability
            to apply their knowledge to new and novel tasks will bode well for
            them when they enter the workforce.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Fosters ingenuity and creativity:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Ingenuity and creativity can pair with STEM and lead to new ideas
            and innovations. Without ingenuity and creativity, the recent
            developments in artificial intelligence or digital learning would
            not be possible. These technologies were created by people who
            learned that the human mind can achieve it if the human mind can
            conceive it.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Fosters ingenuity and creativity:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Ingenuity and creativity can pair with STEM and lead to new ideas
            and innovations. Without ingenuity and creativity, the recent
            developments in artificial intelligence or digital learning would
            not be possible. These technologies were created by people who
            learned that the human mind can achieve it if the human mind can
            conceive it.
          </p>
        </Fade>
        <br />
        <Fade bottom>
          <p className='text-title'>Fosters ingenuity and creativity:</p>
        </Fade>
        <Fade bottom>
          <p className='normal-text'>
            Ingenuity and creativity can pair with STEM and lead to new ideas
            and innovations. Without ingenuity and creativity, the recent
            developments in artificial intelligence or digital learning would
            not be possible. These technologies were created by people who
            learned that the human mind can achieve it if the human mind can
            conceive it.
          </p>
        </Fade>
        <br />

        <div className='footer-row'>
          <div className='social-container'>
            <Fade bottom>
              <span className='share-text'>Share this article:</span>
            </Fade>
            <Fade bottom>
              <SocialContainer socialList={socialList} />
            </Fade>{' '}
          </div>
          <div className='author'>Tags: Tech, Science</div>
        </div>
      </div>
    </MobileBlogDetailContainer>
  );
};
