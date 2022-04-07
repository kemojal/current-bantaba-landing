import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.h3`
  cursor: pointer;
  color: blue;
  font-weight: normal;
  display: flex;
  justify-content: center;

  color: var(--fun-green);
  color: #005225;
  font-family: var(--font-family-noto_sans) !important;
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  

  &:hover {
    /* text-decoration: underline; */
    background-color: #009743;
    color: white;
   
    transform: translateY(-5px) scale(1.01);
   
  }

  @media (min-width: 1280px) {
    /* align-items: center; */
    justify-content: flex-start;
    border: 1px solid #009743;
    max-width: 350px;
    padding: 15px 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    border-radius: 6px;
    color: #009743;
    max-height: 57px;

    &:before { 
    content: '',
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #009743;
    position: absolute;
    left: 0;
    z-index:99;
  }
  }
`;

export { LinkContainer };
