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
const Footer = () => {
  // const { quickLinks, setQuickLinks } = useState({
  //   title: 'Quick Link',
  //   list: ['Home', 'About Us', 'Press', 'Blog'],
  // });

  const FooterData = [
    {
      title: 'Quick Links',
      list: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'About Us',
          link: '/about',
        },
        {
          title: 'Press',
          link: '/',
        },
        {
          title: 'Blog',
          link: '/blog',
        },
      ],
    },
    {
      title: 'Support',
      list: [
        {
          title: 'Contact Us',
          link: '/contact',
        },
        {
          title: 'Join our newsletter',
          link: '/newsletter',
        },
        {
          title: 'FAQs',
          link: '/faq',
        },
      ],
    },
  ];
  const address = {
    title: 'Address',
    address: ['Östermalmsgatan 26A ', '114 26 Stockholm'],
  };
  return (
    <FooterLinkContainer>
      <div className='footer-link-row'>
        {FooterData.map((item, index) => {
          return <FooterCols key={index} {...item} />;
        })}
      </div>
      <div className='address-container'>{<FooterCols {...address} />}</div>
    </FooterLinkContainer>
  );
};

export default Footer;
