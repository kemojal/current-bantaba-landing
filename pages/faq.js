import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '../components/Accordion';

import { Img } from '../components/Img';
import { NavBar } from '../Sections/NavBar';

import Fade from 'react-reveal/Fade';
import { Mission } from '../Sections/Mission';

const FAQContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 4rem; */
  padding-top: 94px;

  .container {
    width: 100%;
  }

  .header-title {
    width: 100%;
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxl);
    font-style: normal;
    font-weight: 700;
    height: auto;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: left;
    padding: 0px 15px;
    /* margin-bottom: 7px; */
  }
  .input-search {
    width: 100%;
    height: 43px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .search-container {
    width: 354px;
    height: 43px;
    background-color: var(--white);
    /* border: 1px solid var(--algae-green); */
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    oveflow: hidden;
    /* padding: 0 10px; */
  }
  .icon-fix {
    position: absolute;
    left: 10px;
  }
  .search-icon {
    position: relative;
    width: 22px;
    height: 22px;
  }

  .question-list-container {
    padding-top: 10px;
    width: calc(100% - 30px);
    margin: 15px;
    /* border: 1px solid #9ce1b8; */
    /* border: 1px solid rgba(91, 97, 94, 0.1); */
    box-sizing: border-box;
    border-radius: 6px;
  }

  @media (min-width: 600px) {
    .container {
      width: 100%;
      max-width: 1146px;
    }
    .input-search {
      height: 104px;
      width: 100%;
      background: #f2fdf7;
      background-color: orange;
      background: #ffffff;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
      box-shadow: 1px 8px 50px 1px rgba(119, 134, 117, 0.1);
      border-radius: 10px;
      padding: 25px;
    }
    .search-container {
      width: calc(100% - 50px);
      background: #fafafa;
      /* border: 1px solid rgba(91, 97, 94, 0.2); */
      box-sizing: border-box;
      /* border-radius: 6px; */
    }
    .question-list-container {
      margin-top: 25px;
      margin-bottom: 100px;
      background: #ffffff;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  /* border: none */
  padding-left: 40px;
  color: #5f5f5f;
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-s);
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 38px;
  text-align: left;
  border: 1px solid var(--algae-green);
  border-radius: 10px;
  &:focus {
    border-color: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    border: 1px solid var(--algae-green);
    outline: none;
  }
`;
export default function FAQ() {
  const [query, setQuery] = useState('');
  let inputHandler = (e) => {
    setQuery(e.target.value);
    // var lowerCase = e.target.value.toLowerCase();
    // setInputText(lowerCase);
  };

  const FAQData = [
    {
      section: 'General',
      subSection: [
        {
          question: 'What is Bantaba?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
        {
          question: 'What kind of startups are there on Bantaba?',
          answer: 'Bantaba is a community that connects African tech ',
        },
        {
          question: 'Who is behind Bantaba?',
          answer:
            'connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
        {
          question: 'How do I change my password?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
        {
          question:
            'How much does Bantaba charge? or is it free to use Bantaba?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
      ],
    },
    {
      section: 'Startups',
      subSection: [
        {
          question: 'What is Bantaba?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
      ],
    },
    {
      section: 'Diaspora',
      subSection: [
        {
          question: 'What is Bantaba?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
      ],
    },
    {
      section: 'Data Protection',
      subSection: [
        {
          question: 'What is Bantaba?',
          answer:
            'Bantaba is a community that connects African tech startups with Africans living abroad. As a startup, the platform provides access to investors, mentors and consultants in the diaspora community. In turn, the diaspora has the opportunity to contribute to the African tech ecosystem through networking, mentoring and investing in tech startups on the continent.',
        },
      ],
    },
  ];

  return (
    <FAQContainer>
      <div className='container'>
        <Fade bottom>
          <p className='header-title'>FAQs</p>
        </Fade>
        <Fade bottom>
          <div className='input-search mt-24'>
            <div className='search-container'>
              <div className='icon-fix'>
                <div className='search-icon'>
                  <Img
                    src={'search.svg'}
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
              <Input onChange={inputHandler} type='text' placeholder='Search' />
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <ul className='question-list-container'>
            {FAQData.filter((post) => {
              if (query === '') {
                return post;
              } else if (
                post.section.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            }).map((item, index) => {
              return <Accordion key={index} {...item} />;
            })}
          </ul>
        </Fade>
      </div>
      <Mission />
      <NavBar />
    </FAQContainer>
  );
}
