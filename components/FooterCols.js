import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterColumn = styled.div`
  width: ${({ address }) => (address ? '100%' : 'auto')};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ address }) => (address ? 'center' : 'flex-start')};
  /* &:first-child {
    margin-right: ${({ address }) => (address ? '0' : '0px')};
  }
  &:nth-child(2) {
    margin-left: ${({ address }) => (address ? '0' : '70px')};
  } */
  p {
    letter-spacing: 0px;
    line-height: 22px;
    text-align: left;
    padding-bottom: 5px;
  }
  ul {
    width: 100%;
  }
  li {
    letter-spacing: 0px;
    line-height: 19px;
    text-align: left;
    margin: 6px 0;
  }
  .address-div {
    width: 50vw;
    /* transform: translateX(-13vw); */
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    line-height: 19px;
    /* background-color: orange; */
  }
  .address-div span {
    line-height: 19px;
    /* background-color: orange; */
    margin-bottom: 6px;
  }
  @media (min-width: 1280px) {
    align-items: flex-start;
    .address-div {
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
const FooterCols = ({ title, list, address }) => {
  return (
    <FooterColumn address={address}>
      <p className='notosans-bold-licorice-16px title'>{title}</p>
      <ul>
        {list &&
          list.map((item) => (
            <li className='notosans-normal-licorice-14px' key={item}>
                <Link href={item.link ? item.link : ''}>
                  <a>{item.title}</a>
                </Link>
            </li>
          ))}
      </ul>
      {address && (
        <div className='notosans-normal-licorice-14px address-div'>
          <span> {address[0]}</span>
          <span> {address[1]}</span>
        </div>
      )}
    </FooterColumn>
  );
};

export default FooterCols;
