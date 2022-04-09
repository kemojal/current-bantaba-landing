import React, { useState } from 'react';
import styled from 'styled-components';
import { Img } from '../components/Img';
import { SubAccordion } from './SubAccordion';

import Fade from 'react-reveal/Fade';

const AccordionContainer = styled.div`
  width: 100%;
  transition: all 0.2 ease-in-out;
  border: 1px solid rgba(91, 97, 94, 0.1);
  margin: 5px 0;
  border-radius: 6px;
  .accordion-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0 16px;
    cursor: pointer;
  }
  .icon {
    position: relative;
    width: 11.91px;
    height: 6.82px;
  }
  .section-title {
    letter-spacing: 0px;
    line-height: 24px;
    text-align: left;
    padding: 12px 0;
    color: ${({ isActive }) => (isActive ? '#009743' : '#011108')};

    width: 100%;
  }
  .subsection-container {
    width: 100%;
    background: #e7fff030;
  }

  @media (min-width: 600px) {
    padding: 0px;
    border: 1px solid rgba(91, 97, 94, 0.1);
    .subsection-container {
      background: #e7fff030;
      background-color: ${({ isActive }) => (isActive ? '#04853a10' : 'white')};
    }
    .section-title {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 140%;
      color: #009743;
      color: #011108;
      color: white;
      color: ${({ isActive }) => (isActive ? '#009743' : '#011108')};
      padding: 20px 30px;
    }
  }
`;
//
const AIcon = styled.div`
  background-color: #e8fcf1;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Accordion = ({ section, subSection }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <AccordionContainer isActive={isActive}>
      <div className='accordion-header' onClick={() => setIsActive(!isActive)}>
        <p className='notosans-normal-kaitoke-green-18px section-title'>
          {section}
        </p>

        <AIcon>
          <div className='icon'>
            {isActive ? (
              <Img
                src={'collapse.svg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            ) : (
              <Img
                src={'expand.svg'}
                alt='logo'
                layout='fill'
                objectFit='contain'
              />
            )}
          </div>
        </AIcon>
      </div>
      {isActive && (
        <ul className='subsection-container'>
          {subSection.map((item, index) => {
            return <SubAccordion key={index} {...item} />;
          })}
        </ul>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
