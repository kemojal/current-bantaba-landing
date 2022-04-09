import React, { useState } from 'react';
import FooterCols from '../components/FooterCols';

import styled from 'styled-components';

const FooterLinkContainer = styled.div`
  width: 100%;
  max-width: calc(100% - 63px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .footer-link-row {
    display: flex;
    width: 100vw;
    max-width: 18.625rem;

    justify-content: space-between;
    justify-content: center;
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

  @media (max-width: 1279px) {
    .footer-link-row {
      align-self: stretch;
      width: 100vw;
      max-width: 100vw;
      transform: translateX(31px);
    }
    .address-container {
      width: 100vw;
      transform: translateX(31px);
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
          return <FooterCols key={index} {...item} lang={lang} />;
        })}
      </div>
      <div className='address-container'>{<FooterCols {...address} />}</div>
    </FooterLinkContainer>
  );
};

export default Footer;
