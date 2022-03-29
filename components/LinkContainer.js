import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.h3`
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

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1280px) {
    /* align-items: center; */
    justify-content: flex-start;
    border: 1px solid #009743;
    max-width: 350px;
    padding: 15px 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    border-radius: 6px;
    color: #009743;
    max-height: 57px;
  }
`;

export { LinkContainer };
