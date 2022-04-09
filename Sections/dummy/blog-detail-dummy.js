import React from 'react';
import { FluidContainer } from '../components/FluidContainer';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import { Img } from '../components/Img';
import { Mission } from '../Sections/Mission';
import { NavBar } from '../Sections/NavBar';
import SocialContainer from '../components/SocialContainer';
const BlogDetailContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  padding-top: 94px;
  padding-bottom: 0;
  @media (min-width: 1280px) {
    .detail-row {
      width: 100%;
      display: flex;
    }
    .reading-col {
      width: calc(67% - 15px);
      margin-right: 15px;
    }
    .related-blogs-container {
      margin-left: 15px;
      width: calc(33% - 15px);
      padding: 15px;
      border-radius: 10px;
      border: 1px solid #f8f8f8;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
      height: auto;
      margin-top: 105px;
    }

    .blog-title {
      ont-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 130%;
      color: #011108;
    }
    .imageWrapper {
      position: relative;

      width: 781px;
      height: 399px;
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
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
    .read-time-icon {
      width: 26px;
      height: 26px;
      position: relative;
    }
    .footer-row,
    .social-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
    }
    .author {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 160%;
      color: #011108;
    }
    .social-container {
      display: flex;
      align-items: center;
    }
    .share-text {
      margin-right: 15px;
    }
    .blog-text-container {
      width: 100%;
      max-width: 1126px;
    }
    .text-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
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
    .related-list {
      border-bottom: 1px solid #f8f8f8;
      margin: 5px 0;
      padding: 5px;
    }
    .related-blogs--container-header {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 130%;
      color: #011108;
    }
    .related-list-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 130%;
    }
    .related-list-footer {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 160%;
      color: #5b615e;
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
    .category {
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
  }
`;
const blogdetail = () => {
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
  const relatedNews = [
    {
      title: 'What makes a Perfect Pitch Deck?',
      readTime: 3,
      category: 'Tech',
    },
    {
      title: 'Challenges faced by female Entrepreneurs in Africa',
      readTime: 3,
      category: 'Tech',
    },
    {
      title: 'Why you should mentor a start-up in Africa',
      readTime: 3,
      category: 'Tech',
    },
    {
      title: 'Relief for African startups as Bantaba platform goes live',
      readTime: 3,
      category: 'Tech',
    },
    {
      title: 'These are the leading investment countries in Africa',
      readTime: 3,
      category: 'Tech',
    },
  ];
  return (
    <BlogDetailContainer>
      <FluidContainer>
        <div className='detail-row'>
          <div className='reading-col'>
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
            <div className='social-row'>
              <div className='author'>Author: Tommy</div>
              <div className='social-container'>
                <span className='share-text'>Share:</span>
                <Fade bottom>
                  <SocialContainer socialList={socialList} />
                </Fade>{' '}
              </div>
            </div>
            <div className='blog-text-container'>
              <Fade bottom>
                <p className='text-title'>Fosters ingenuity and creativity:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Students learn in a safe environment during STEM education
                  activities that allow them to fall and try again. STEM
                  education stresses the value of failure as a learning
                  exercise, which will enable students to embrace mistakes as
                  part of the learning process. This allows students to build
                  confidence and resilience, which will enable them to keep
                  going when the going gets rough. After all, failure is part of
                  a process that ultimately leads to success.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Builds resilience:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Ingenuity and creativity can pair with STEM and lead to new
                  ideas and innovations. Without ingenuity and creativity, the
                  recent developments in artificial intelligence or digital
                  learning would not be possible. These technologies were
                  created by people who learned that the human mind can achieve
                  it if the human mind can conceive it.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Encourages experimentation:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Without a little risk-taking, and experimentation, many of the
                  technological advancements that have occurred in the last
                  couple of decades would not be possible. Many of these
                  innovations were created by people who were told that their
                  ideas wouldn’t work and their response was, “Let’s try it and
                  see.” This type of attitude can be encouraged with STEM
                  learning by allowing students to experiment and take risks
                  during learning activities.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Encourages teamwork:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  STEM education can be taught to students of all ability
                  levels. Students of varying levels of ability can work
                  together in teams to find solutions to problems, record data,
                  write reports, give presentations, etc. The end result is
                  students who understand how to collaborate with others and
                  thrive in a team-oriented environment.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Encourages knowledge application:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  In STEM education, students are taught skills that they can
                  use in the real world. This motivates students to learn, as
                  they know that the skills that they acquire can be utilized
                  immediately, and in ways that positively impact them and their
                  loved ones. The ability to apply their knowledge to new and
                  novel tasks will bode well for them when they enter the
                  workforce.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Fosters ingenuity and creativity:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Ingenuity and creativity can pair with STEM and lead to new
                  ideas and innovations. Without ingenuity and creativity, the
                  recent developments in artificial intelligence or digital
                  learning would not be possible. These technologies were
                  created by people who learned that the human mind can achieve
                  it if the human mind can conceive it.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Fosters ingenuity and creativity:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Ingenuity and creativity can pair with STEM and lead to new
                  ideas and innovations. Without ingenuity and creativity, the
                  recent developments in artificial intelligence or digital
                  learning would not be possible. These technologies were
                  created by people who learned that the human mind can achieve
                  it if the human mind can conceive it.
                </p>
              </Fade>
              <br />
              <Fade bottom>
                <p className='text-title'>Fosters ingenuity and creativity:</p>
              </Fade>
              <Fade bottom>
                <p className='normal-text'>
                  Ingenuity and creativity can pair with STEM and lead to new
                  ideas and innovations. Without ingenuity and creativity, the
                  recent developments in artificial intelligence or digital
                  learning would not be possible. These technologies were
                  created by people who learned that the human mind can achieve
                  it if the human mind can conceive it.
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
          </div>
          <div className='related-blogs-container'>
            <p className='related-blogs--container-header'>Related Blogs</p>
            <ul className='related-blog-list-container'>
              {relatedNews.map((item, index) => {
                return (
                  <li key={index} className='related-list'>
                    <Fade bottom>
                      <p className='related-list-title'>{item.title}</p>
                    </Fade>
                    <div className='related-list-footer'>
                      <Fade bottom>
                        <span className='category'>{item.category}</span>
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
                          <span className='f-read-time-label'>
                            Read {item.readTime}
                          </span>
                        </Fade>
                      </div>
                      <span className='related-read-time'></span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </FluidContainer>
      <Mission lang={lan} />
      <NavBar currentlan={lan} locale={lan} path={'/'} router={router} />
    </BlogDetailContainer>
  );
};

export default blogdetail;
