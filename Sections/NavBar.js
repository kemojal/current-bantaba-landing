import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';

import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import ButtonArrow from '../components/ButtonArrow.';
import Select from 'react-select';
import { Img } from '../components/Img';

import { GlobalContext } from '../context/GlobalState';

// import { useRouter } from 'next/router';

const Nav = styled.nav`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ hastoggle }) =>
    hastoggle ? 'white' : 'var(--white-ice-color)'};
  width: 100%;
  position: fixed;
  z-index: 10;
  clear: both;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid #e6f1eb;

  .lang {
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    /* right: 60px; */
    right: 30px;
    top: -5px;
    transition: 0.25s ease-in-out;
    opacity: ${({ hastoggle }) => (hastoggle ? '1' : '0')};
  }
  .langName {
    margin-left: 2px;
    border: none;
  }
  @media (min-width: 1280px) {
    .fixed-bg {
      position: absolute;
      top: 0;
      bottom: 0;

      width: 50vw !important;
    }
    .left {
      right: 50%;
      left: 0;
      background-color: white;
    }
    .right {
      right: 0;
    }
  }
`;
const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
  position: relative;
  .desk-left-nav {
    display: none;
  }
  .desk-right-nav,
  .desk-left-nav {
    display: none;
  }
  .nav-bg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0 10px;
    background-color: ${({ hastoggle }) =>
      hastoggle ? 'white' : 'var(--white-ice-color)'};
    border-bottom: 1px solid #e6f1eb;
  }
  /* background-color: orange; */
  @media (min-width: 1280px) {
    /* max-width: calc(100% - 300px); */
    max-width: var(--max-width);
    max-height: 50px;
    justify-content: space-between;
    padding: 0;

    .nav-bg {
      background-color: transparent;
    }

    .desk-left-nav {
      display: flex;
      padding-left: 30px;
    }
    .desk-right-nav li,
    .desk-left-nav li {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #5b615e;
      margin: 0px 25px;
      /* width: 50px; */
      padding: 10px 0;
      text-align: center;
    }

    .why-join-tab {
      color: ${({ currentActiveTab }) =>
        currentActiveTab == 'whyjoin'? '#009743 !important' : '#5b615e'};
      border-bottom: ${({ currentActiveTab }) =>
        currentActiveTab == 'whyjoin'
          ? '3px solid #009743'
          : '3px solid transparent'};
    }
    .about-li {
      color: ${({ currentActiveTab }) =>
        currentActiveTab == 'about'? '#009743 !important' : '#5b615e'};
      border-bottom: ${({ currentActiveTab }) =>
        currentActiveTab === 'about'
          ? '3px solid #009743'
          : '3px solid transparent'};
    }
    .blog-li {
      color: ${({ currentActiveTab }) =>
        currentActiveTab == 'blog'? '#009743 !important' : '#5b615e'};
      border-bottom: ${({ currentActiveTab }) =>
        currentActiveTab === 'blog'
          ? '3px solid #009743'
          : '3px solid transparent'};
    }
    .faq-li {
      color: ${({ currentActiveTab }) =>
        currentActiveTab == 'faq'? '#009743 !important' : '#5b615e'};
      border-bottom: ${({ currentActiveTab }) =>
        currentActiveTab === 'faq'
          ? '3px solid #009743'
          : '3px solid transparent'};
    }

    .desk-right-nav {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      align-items: center;
      padding-left: 0px;
      padding-right: 0 !important;
      width: 50%;
    }
    .desk-right-nav li {
      margin-right: 0px;
      cursor: pointer;
    }

    .lang-desktop {
      display: flex;
    }
    .lang {
      display: none;
    }
  }
`;
const HamburgerContainer = styled.div`
  width: 25px;
  margin: 1.2em 1.6em;
  height: 30px;
  margin-right: 0;
  cursor: pointer;
  float: right;
  @media (min-width: 1280px) {
    display: none;
  }
`;
const Hamburger = styled.ul`
  display: block;
  cursor: pointer;
  li {
    height: 2px;
    background: black;
    content: '';
    position: relative;
    /* transition: 0.25s ease-in-out; */
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    border-radius: 10px;

    &:nth-child(1) {
      top: ${({ hastoggle }) => (hastoggle ? '10px !important' : '0')};
      transform: ${({ hastoggle }) =>
        hastoggle ? 'rotate(45deg)' : 'rotate(0deg)'};
      top: ${({ hastoggle }) =>
        hastoggle ? '10px !important' : '0px !important'};
    }
    &:nth-child(2) {
      top: 5px;
      opacity: ${({ hastoggle }) => (hastoggle ? '0' : '1')};
    }
    &:nth-child(3) {
      top: ${({ hastoggle }) => (hastoggle ? '7px' : '10px')};
      transform: ${({ hastoggle }) =>
        hastoggle ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
`;
const Menu = styled.ul`
  cursor: pointer;
  display: inline;
  position: fixed;
  left: 0;
  right: 0;
  background-color: white;
  transition: 0.4s ease-in-out;
  top: ${({ hastoggle }) => (hastoggle ? '60px' : 'calc(-100vh - 50px)')};
  padding: 20px 0;
  height: 100vh;
  opacity: ${({ hastoggle }) => (hastoggle ? '1' : '0')};
  li {
    padding: 10px 20px;
    /* font-size: 20px; */
    /* border-bottom: 1px solid #00000012; */

    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-m);
    font-style: normal;
    font-weight: 400;

    letter-spacing: 0px;
    line-height: 24px;
    text-align: left;
    margin: 10px 0;
    display: flex;
  }
  li a {
    /* background-color: orange; */
    width: 100%;
    height: 100%;
  }
  .spacer {
    height: 30px;
  }
  .spacer-2 {
    height: 5px;
    margin: 0 !important;
    padding: 5px 0 !important;
  }
  @media (min-width: 1280px) {
    /* .hide-on-mobile {
      display: none !important;
    } */
    display: inline;
    display: none;
    &hover {
      background-color: #303030;
    }
    li {
      display: inline-block;
      margin-right: -5px;
    }
    li a {
      width: 100%;
      display: block;
      background-color: #000;
      color: #fff;
      font-size: 1em;
      padding: 1.5em 1.6em;
      transition: background 0.2s;
      text-decoration: none;
    }
  }
  .button {
    background-color: white !important;
    width: 90% !important;
    transform: translateX(5%) !important;
    border-radius: 3px !important;
    margin: 5px 0 !important;
    text-align: center !important;
    /* border-radius: 10px !important; */

    height: 60px !important;
    border-radius: 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding: 18px 20px !important;
  }
  .button a {
    color: var(--licorice);
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    /* line-height: 27px; */
    text-align: center;
  }
  .border-green {
    border: 1px solid #9ce1b8 !important;
  }
  .bg-green {
    background-color: #9ce1b8 !important;
  }
`;
const Customselect = styled.select``;

const SelectOption = styled.div`
  /* width: 100px; */
  margin-left: 5px;
  padding: 0px 10px;
  /* background-color: white; */
  border-radius: 3px;
  /* border: 1px solid #9ce1b8; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 16px;
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: #011108;
  }
  .currentSelect {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrowDown {
    margin-left: 3px;
    position: relative;
    width: auto;
    height: 26px;
  }
  .selection-options {
    position: absolute;
    width: 100%;
    display: ${({ selectOptionOpen }) => (selectOptionOpen ? 'flex' : 'none')};
    background-color: white;
    /* border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px; */
    border-radius: 3px;
    border: 1px solid #9ce1b8;
    flex-direction: column;
    align-items: center;
    top: 25px;
  }
  .selection-options span {
    text-align: center;
    width: 100%;
    /* color: #131313; */
    /* font-size: 16px; */
    /* line-height: 24px; */
    border-bottom: 1px solid #9ce1b850;
  }

  @media (max-width: 1279px) {
    .selection-options {
      top: -5px;
    }
    .arrowDown {
      height: 30px;
    }
  }
`;

export const NavBar = ({ locale, router, path }) => {
  const { setCurrentLanguage, currentLanguage, setTab, currentActiveTab } =
    useContext(GlobalContext);
  const [hastoggle, setHastoggle] = useState(false);
  // const [currentTab, setCurrentTab] = useState('/');

  const [selectOptionOpen, setSelectOptionOpen] = useState(false);

  // console.log('router  = ', router);
  // console.log('router path ', router.asPath)

  const toggleHambburger = () => {
    setHastoggle(!hastoggle);
  };

  const closeNav = () => {
    setHastoggle(false);
  };
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'en', label: 'FR' },
  ];
  const [currentLang, setCurrentLang] = useState('en');
  const selectLanguage = (e) => {
    setCurrentLang(e.value);
    setCurrentLanguage(e.value);
    closeNav();
  };

  const setLang = (language) => {
    const locale = language;
    router.locale = locale;
    // router.push(router.pathname, router.pathname, { locale });
    setCurrentLanguage(language);
    setSelectOptionOpen(false);
    closeNav();
  };
  const toggleLangSelect = () => setSelectOptionOpen(!selectOptionOpen);

  useEffect(() => {
    if (router.asPath == '/faq/') {
      setTab('faq');
    } else if (router.asPath == '/blog/') {
      setTab('blog');
    } else if (router.asPath == '/about/') {
      setTab('about');
    } else if (router.asPath == '/#whyjoin') {
      setTab('whyjoin');
    } else if (router.asPath == '/') {
      setTab('home');
    }
  }, [currentActiveTab]);
  return (
    <Nav hastoggle={hastoggle}>
      <div className='fixed-bg left' />
      <div className='fixed-bg right' />
      <NavContainer hastoggle={hastoggle} currentActiveTab={currentActiveTab}>
        <Menu hastoggle={hastoggle}>
          <li onClick={toggleHambburger}>
            <a href='/#whyjoin'>Why Join</a>
          </li>
          <li onClick={toggleHambburger}>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li onClick={toggleHambburger}>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li onClick={toggleHambburger}>
            <Link href='/faq'>
              <a>FAQ</a>
            </Link>
          </li>

          <li className='spacer' />
          <li className='button border-green' onClick={toggleHambburger}>
            <a href='#'>Log In</a>
          </li>
          <li className='spacer-2' />
          <li className='button bg-green' onClick={toggleHambburger}>
            <a href='#'>Sign Up</a>
          </li>
        </Menu>
        <div className='nav-bg'>
          <Link href='/'>
            <div className='logo-container' onClick={closeNav}>
              <Img
                src='bantaba_logo-nav.svg'
                alt='logo'
                width={108}
                height={24}
                priority={true}
              />
            </div>
          </Link>
          <ul className='desk-left-nav'>
            <li className='why-join-tab'>
              <Link href='/#whyjoin'>
                <a>Why Join</a>
              </Link>
            </li>
            <li className='about-li'>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li className='blog-li'>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
            <li className='faq-li'>
              <Link href='/faq'>
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
          <ul className='desk-right-nav'>
            <li>
              <div className='lang-desktop'>
                <Img
                  src='globe-d.svg'
                  alt='logo'
                  width={18}
                  height={18}
                  priority={true}
                />

                {/* <Customselect onChange={onChangeLanguage} default={locale}>
                <option value='en'>EN</option>
                <option value='fr'>FR</option>
              </Customselect> */}
                <SelectOption selectOptionOpen={selectOptionOpen}>
                  <div className='currentSelect' onClick={toggleLangSelect}>
                    <div>
                      {' '}
                      {currentLanguage === 'en' ? 'English' : 'French'}
                    </div>
                    <div className='arrowDown'>
                      <Img
                        src='arrow-down.svg'
                        alt='logo'
                        width={10}
                        height={5}
                        priority={true}
                      />
                    </div>
                  </div>

                  <div className='selection-options'>
                    <span
                      onClick={() => {
                        setLang('en');
                      }}
                    >
                      English
                    </span>
                    <span
                      onClick={() => {
                        setLang('fr');
                      }}
                    >
                      French
                    </span>
                  </div>
                </SelectOption>
              </div>
            </li>
            <li>
              <Link
                href='https://community.ourbantaba.com/en/login'
                passHref={true}
              >
                <a>Login</a>
              </Link>
            </li>
            <li>
              <ButtonArrow
                maxWidth='122px'
                maxHeight='44px'
                title={'Sign Up'}
                isArrow={true}
                color={'white'}
                href='https://community.ourbantaba.com/en/register'
                fontSize='1rem'
                mRight='0px'
              />
            </li>
          </ul>
          <div className='lang hide-on-mobile' hastoggle={hastoggle}>
            <Img
              src='globe-d.svg'
              alt='logo'
              width={18}
              height={18}
              priority={true}
            />
            {/* <Customselect onChange={onChangeLanguage} default={locale}>
            <option value='en'>EN</option>
            <option value='fr'>FR</option>
          </Customselect> */}
            <SelectOption selectOptionOpen={selectOptionOpen}>
              <div className='currentSelect' onClick={toggleLangSelect}>
                <div> {currentLanguage === 'en' ? 'EN' : 'FR'}</div>
                <div className='arrowDown'>
                  <Img
                    src='arrow-down.svg'
                    alt='logo'
                    width={10}
                    height={5}
                    priority={true}
                  />
                </div>
              </div>

              <div className='selection-options'>
                <span
                  onClick={() => {
                    setLang('en');
                  }}
                >
                  EN
                </span>
                <span
                  onClick={() => {
                    setLang('fr');
                  }}
                >
                  FR
                </span>
              </div>
            </SelectOption>

            {/* <span className='langName'>EN</span> */}
            {/* <Select
            value={options.filter(function (option) {
              return option.value === currentLang;
            })}
            onChange={selectLanguage}
            className='langName'
            options={options}
          /> */}
          </div>
          <HamburgerContainer onClick={toggleHambburger}>
            <Hamburger hastoggle={hastoggle}>
              <li></li>
              <li></li>
              <li></li>
            </Hamburger>
          </HamburgerContainer>
        </div>
      </NavContainer>
    </Nav>
  );
};
