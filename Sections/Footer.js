import React, { useState } from 'react';
import FooterCols from '../components/FooterCols';

import styled from 'styled-components';

const FooterLinkContainer = styled.div`
  width: 100%;
  max-width: calc(100% - 63px);
  display: flex;
  /* margin: 0px 20px; */
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;

  .footer-link-row {
    display: flex;
    width: 100vw;
    max-width: 18.625rem;
    /* background-color: red; */

    justify-content: space-between;
  }

  .address-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    .address-container {
      display: none;
    }
  }
`;
const Footer = ({ lang }) => {
  const FooterData = [
    {
      title: lang.quicklinks,
      list: [
        {
          title: lang.home,
          link: '/',
        },
        {
          title: lang.about_us,
          link: '/about',
        },
        {
          title: lang.press_mobile,
          link: '/#press',
        },
        {
          title: lang.blog,
          link: '/blog',
        },
      ],
    },
    {
      title: lang.support,
      list: [
        {
          title: lang.contact_us,
          link: '/contact',
        },
        {
          title: lang.join_our_newsletter,
          link: '/newsletter',
        },
        {
          title: lang.faqs,
          link: '/faq',
        },
      ],
    },
  ];
  const address = {
    title: lang.address,
    address: [lang.address_no1, lang.address_no2],
  };
  return (
    <FooterLinkContainer>
      <div className='footer-link-row'>
        {FooterData.map((item, index) => {
          return <FooterCols key={index} {...item} lang={lang}/>;
        })}
      </div>
      <div className='address-container'>{<FooterCols {...address} />}</div>
    </FooterLinkContainer>
  );
};

export default Footer;
