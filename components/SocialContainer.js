import React from 'react';
import SocialIcons from './SocialIcons';

import styled from 'styled-components';

const SocialDiv = styled.div`
  width: 100%;
  /* background-color: red; */
  /* transform: translateX(12.5vw); */
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
  .containerDiv {
    max-width: 50vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 100%;
    /* background-color: red; */
  }
`;

const SocialContainer = ({ socialList }) => {
  return (
    <SocialDiv>
      <div className='containerDiv'>
        {socialList.map((item, index) => {
          return <SocialIcons key={index} {...item} />;
        })}
      </div>
    </SocialDiv>
  );
};

export default SocialContainer;
