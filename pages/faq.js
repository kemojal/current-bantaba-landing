import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { GlobalContext } from '../context/GlobalState';

import styled from 'styled-components';
import Accordion from '../components/Accordion';

import { Img } from '../components/Img';
import { NavBar } from '../Sections/NavBar';

import Fade from 'react-reveal/Fade';
import { Mission } from '../Sections/Mission';

import en from '../lang/en';
import fr from '../lang/fr';

const FAQContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    oveflow: hidden;
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
    width: calc(100% - 10px);
    margin: 5px;
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: 100px;
  }

  @media (min-width: 600px) {
    .container {
      width: 100%;
      max-width: var(--max-width);
    }
    .input-search {
      height: 104px;
      width: 100%;
      background: #ffffff;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
      box-shadow: 1px 8px 50px 1px rgba(119, 134, 117, 0.1);
      border-radius: 13px;
      padding: 15px;
    }
    .search-container {
      width: calc(100% - 0px);
      background: #fafafa;
      box-sizing: border-box;
      height: 59px;
    }
    .question-list-container {
      padding-top: 0;
      margin-top: 25px;
      margin-bottom: 100px;
      background-color: transparent;
      padding: 0;
      margin-left: 0;
      marig-right: 0;
      width: 100%;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
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
export default function FAQ({ EnglishFaQ, FrenchFAQ }) {
  const router = useRouter();
  const { locale } = router;
  // const lan = locale == 'en' ? en : fr;

  const { currentLanguage, setCurrentLanguage } = useContext(GlobalContext);
  const [currentQueryData, setCurrentQueryData] = useState(
    currentLanguage === 'en' ? EnglishFaQ.FAQData : FrenchFAQ.FAQData
  );
  const [query, setQuery] = useState('');

  const [result, setResult] = useState(
    currentLanguage === 'en' ? EnglishFaQ.FAQData : FrenchFAQ.FAQData
  );

  const [lan, setlan] = useState(currentLanguage == 'en' ? en : fr);
  let inputHandler = (e) => {
    setQuery(e.target.value);
    setResult(QueryData(query));
  };

  useEffect(() => {
    // const browserlang = localStorage.getItem('browserLanguague');
    // if (browserlang) {
    //   setCurrentLanguage(browserlang);
    // } else {
    //   localStorage.setItem('browserLanguague', JSON.stringify(currentLanguage));
    // }
    setResult(
      currentLanguage === 'en' ? EnglishFaQ.FAQData : FrenchFAQ.FAQData
    );
    setCurrentQueryData(
      currentLanguage === 'en' ? EnglishFaQ.FAQData : FrenchFAQ.FAQData
    );
    setlan(currentLanguage == 'en' ? en : fr);
  }, [currentLanguage]);

  const QueryData = (query) => {
    return currentQueryData.reduce((r, { section, subSection }) => {
      let o = subSection.filter(
        ({ question, answer }) =>
          question.toLowerCase().includes(query.toLowerCase()) ||
          answer.toLowerCase().includes(query.toLowerCase())
      );
      if (o && o.length) r.push({ section, subSection: [...o] });
      return r;
    }, []);
  };
  return (
    <FAQContainer>
      <div className='container'>
        <Fade bottom>
          <p className='header-title'>{lan.faqs}</p>
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
        <ul className='question-list-container'>
          {result.map((item, index) => {
            return <Accordion key={index} {...item} />;
          })}
        </ul>
      </div>
      <Mission lang={lan} />
      <NavBar currentlan={lan} locale={lan} router={router} />
    </FAQContainer>
  );
}

FAQ.getInitialProps = async (ctx) => {
  const [EnglishFaQResponse, FrenchFAQResponse] = await Promise.all([
    fetch('https://landingapi-dev.ourbantaba.com/faqs/groups/en/all'),
    fetch('https://landingapi-dev.ourbantaba.com/faqs/groups/fr/all'),
  ]);

  const EnglishFaQ = await EnglishFaQResponse.json();
  const FrenchFAQ = await FrenchFAQResponse.json();
  return { EnglishFaQ, FrenchFAQ };
};
