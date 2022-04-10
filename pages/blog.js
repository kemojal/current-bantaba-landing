import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';

import { BlogCard } from '../components/BlogCard';
import { PressCard } from '../components/PressCard';
import { NavBar } from '../Sections/NavBar';

import Fade from 'react-reveal/Fade';
import { Mission } from '../Sections/Mission';
import { FluidContainer } from '../components/FluidContainer';
import FeaturedBlogCard from '../components/FeaturedBlogCard';
import DesktopBlogCard from '../components/DesktopBlogCard';
import { MobileBlogDetail } from '../components/MobileBlogDetail';
import BlogDetail from '../components/BlogDetails';

import { GlobalContext } from '../context/GlobalState';

import en from '../lang/en';
import fr from '../lang/fr';

const BlogContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-top: 94px;

  position: relative;
  .blog-m-title {
    font-family: var(--font-family-noto_sans);
    font-size: var(--font-size-xxxl);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 38px;
    text-align: left;
    width: 100%;
    font-size: 28px;
    padding: 0px 15px;
  }
  .blog-cards-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .hide-on-desktop {
    display: block;
  }
  .hide-on-mobile {
    display: none;
  }
  .blog-mobile-cards-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
  .desktop-layout {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .blog-desk-colum-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .previous-blogs-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .blog-desk-colum-right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 0;
    .blog-cards-container {
      max-width: 1200px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .hide-on-desktop {
      display: none;
    }
    .hide-on-mobile {
      display: block;
    }

    .desktop-layout {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    .blog-desk-colum-left {
      flex-direction: column;
      backgrounnd-color: orange;

      width: calc(67% - 15px);
      margin-right: 15px;
    }
    .previous-blogs-container {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 100px;
    }
    .blog-desk-colum-right {
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      width: calc(33% - 15px);
    }
  }
`;
function Blog({ blogs }) {
  const featured = blogs.blogs[0];
  const restBlogs = [...blogs.blogs];
  const rightSide = '';
  // const [restBlogs, setRestBlogs] = useState();

  const { showBlogDetail, setCurrentLanguage, currentLanguage } =
    useContext(GlobalContext);

  const router = useRouter();
  const { locale } = router;
  // const lan = locale == 'en' ? en : fr;
  const [lan, setlan] = useState(currentLanguage == 'en' ? en : fr);

  useEffect(() => {
    setlan(currentLanguage == 'en' ? en : fr);
    // const browserlang = localStorage.getItem('browserLanguague');
    // if (browserlang) {
    //   setCurrentLanguage(browserlang);
    // } else {
    //   localStorage.setItem('browserLanguague', JSON.stringify(currentLanguage));
    // }
  }, [currentLanguage]);

  const chunkArray = (arr, n) => {
    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
      if (chunkLength * (i + 1) <= arr.length)
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
    return chunks;
  };
  return (
    <BlogContainer>
      <FluidContainer>
        <Fade bottom>
          <h1 className='blog-m-title'>{lan.blog}</h1>
        </Fade>

        <div className='blog-cards-container mt-24   desktop-layout '>
          <div className='blog-desk-colum-left'>
            <FeaturedBlogCard {...featured} read_more={ lan.read_more}/>
            <div className='previous-blogs-container'>
              {restBlogs.map((item, index) => {
                if (index === 0 || index > (restBlogs.length - 1) / 2) return;
                if (index === 1) {
                  return (
                    <DesktopBlogCard
                      mRight='15px'
                      mBottom='15px'
                      mTop='30px'
                      key={index}
                      {...item}
                      onClick={() => {
                        alert('clicked');
                      }}
                    />
                  );
                }
                if (index === 2) {
                  return (
                    <DesktopBlogCard
                      mLeft='15px'
                      mBottom='15px'
                      mTop='30px'
                      key={index}
                      {...item}
                    />
                  );
                }

                if (index % 2 == 1 && index !== 1) {
                  return (
                    <DesktopBlogCard
                      mRight='15px'
                      mBottom='15px'
                      mTop='15px'
                      key={index}
                      {...item}
                    />
                  );
                } else if (index % 2 == 0 && index !== 2) {
                  return (
                    <DesktopBlogCard
                      mLeft='15px'
                      mBottom='15px'
                      mTop='15px'
                      key={index}
                      {...item}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className='blog-desk-colum-right'>
            {restBlogs.map((item, index) => {
              if (index === 0 || index <= (restBlogs.length - 1) / 2) return;
              else {
                return (
                  <DesktopBlogCard
                    width='100%'
                    mBottom='15px'
                    key={index}
                    {...item}
                  />
                );
              }
            })}
          </div>
        </div>
      </FluidContainer>

      <Mission lang={lan} />
      <NavBar currentlan={lan} locale={lan} router={router} />
      {showBlogDetail && (
        <BlogDetail {...featured} currentlan={lan} lang={lan} />
      )}
    </BlogContainer>
  );
}

export default Blog;

Blog.getInitialProps = async (ctx) => {
  const res = await fetch('https://blogapi.ourbantaba.com/blogs/all/en');
  const json = await res.json();
  return { blogs: json };
};
