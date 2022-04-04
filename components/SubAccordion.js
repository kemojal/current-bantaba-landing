import React, { useState } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';

import Fade from 'react-reveal/Fade';

// collapse
const SubAccordionContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  /* border-bottom: 1px solid #9ce1b8; */
  border: 0.5px solid rgba(91, 97, 94, 0.05);

  &:last-child {
    border-bottom: none;
  }
  .sub-accordion-header {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 0 16px;
    cursor: pointer;
  }
  .sub-icon {
    position: relative;
    width: 20px;
    height: 20px;
  }
  .sub-section-title {
    letter-spacing: 0px;
    line-height: 18px;
    text-align: left;
    padding: 10px;
    width: calc(100% - 30px);
    color: #011108;
    font-weight: 600;
    opacity: 0.8;
    font-size: 18px;
    /* font-weight: 400; */
  }
  .answer-container {
    width: 100%;
    padding: 10px;
    //change style to desktop
    font-weight: 400;
    line-height: 160%;
    font-size: 16px;
    color: #5b615e;
  }
  @media (min-width: 600px) {
    .sub-accordion-header {
      flex-direction: row-reverse;
    }
    .answer-container {
      padding-left: 40px;
      padding-right: 40px;
      max-width: 900px;
    }
  }
`;
export const SubAccordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <SubAccordionContainer>
      <div
        className='sub-accordion-header'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='sub-icon'>
          {isActive ? (
            <Img
              src={'minus.svg'}
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          ) : (
            <Img
              src={'plus.svg'}
              alt='logo'
              layout='fill'
              objectFit='contain'
            />
          )}
        </div>

        <p className='notosans-normal-kaitoke-green-18px sub-section-title'>
          {question}
        </p>
      </div>
      {isActive && (
        <div
          dangerouslySetInnerHTML={{ __html: answer }}
          className='notosans-normal-kaitoke-green-18px answer-container'
        >
          {/* <div  /> */}
          {/* {answer} */}
        </div>
      )}
    </SubAccordionContainer>
  );
};
