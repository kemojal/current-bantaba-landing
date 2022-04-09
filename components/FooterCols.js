import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { GlobalContext } from '../context/GlobalState';
const FooterColumn = styled.div`
  width: ${({ address }) => (address ? '100%' : '50%')};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ address }) => (address ? 'center' : 'flex-start')};
  &:first-child {
    margin-right: ${({ address }) => (address ? '0' : '40px')};
  }
  &:nth-child(2) {
    margin-left: ${({ address }) => (address ? '0' : '40px')};
  }
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
    cursor: pointer;
  }
  .address-div {
    width: 50vw;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    line-height: 19px;
  }
  .address-div span {
    line-height: 19px;
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
const FooterCols = ({ title, list, address, lang }) => {
  const {
    toggleContactModal,
    showNewsLetterModal,
    toggleSubscribeNewsletterModal,
  } = useContext(GlobalContext);

  const openJoinNewsletter = () => {
    toggleSubscribeNewsletterModal(true);
  };
  const openContactUs = () => {
    toggleContactModal(true);
  };
  return (
    <FooterColumn address={address}>
      <p className='notosans-bold-licorice-16px title'>{title}</p>
      <ul>
        {list &&
          list.map((item) => {
            if (item.title === lang.join_our_newsletter) {
              return (
                <li
                  onClick={openJoinNewsletter}
                  className='notosans-normal-licorice-14px'
                  key={item}
                >
                  <a>{item.title}</a>
                </li>
              );
            }
            if (item.title === lang.contact_us) {
              return (
                <li
                  onClick={openContactUs}
                  className='notosans-normal-licorice-14px'
                  key={item}
                >
                  <a>{item.title}</a>
                </li>
              );
            } else {
              return (
                <li className='notosans-normal-licorice-14px' key={item}>
                  <Link href={item.link ? item.link : ''}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            }
          })}
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
