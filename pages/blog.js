import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BlogCard } from '../components/BlogCard';
import { PressCard } from '../components/PressCard';
import { NavBar } from '../Sections/NavBar';

import Fade from 'react-reveal/Fade';
import { Mission } from '../Sections/Mission';
import { FluidContainer } from '../components/FluidContainer';
import FeaturedBlogCard from '../components/FeaturedBlogCard';
import DesktopBlogCard from '../components/DesktopBlogCard';
import { MobileBlogDetail } from '../components/MobileBlogDetail';

const BlogContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  padding-top: 94px;
  position: relative;
  .blog-m-title {
    /* color: #00853b; */
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
  @media (min-width: 1280px) {
    padding-top: 64px;
    padding-bottom: 0;
    .blog-cards-container {
      max-width: 1200px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      /* background-color: red; */
    }
    .hide-on-desktop {
      display: none;
    }
    .hide-on-mobile {
      display: block;
    }

    .desktop-layout {
      display: flex;
      align-items: flex-start;
    }
    .blog-desk-colum-left {
      width: calc(67% - 15px);
      margin-right: 15px;
    }
    .previous-blogs-container {
      width: 100%;
      /* margin-top: 30px; */
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100px;
    }
    .blog-desk-colum-right {
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

  const Blogs = [
    {
      title: '',
      category: 'Design',
      cover_img: 'nmnmnmnmn.png svg jp',
      summart: '',
      full_text: 'bmbmbmbmb // render as html',
    },
    {
      title: '',
      category: 'Design',
      cover_img: 'nmnmnmnmn.png svg jp',
      summart: '',
      full_text: 'bmbmbmbmb // render as html',
    },
    {
      title: '',
      category: 'Design',
      cover_img: 'nmnmnmnmn.png svg jp',
      summart: '',
      full_text: 'bmbmbmbmb // render as html',
    },
  ];
  // useEffect(() => {
  //   setRestBlogs(blogs.blogs.shift());
  // }, []);

  const chunkArray = (arr, n) => {
    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
      if (chunkLength * (i + 1) <= arr.length)
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
    return chunks;
  };
  // const LeftChunk = chunkArray(JSON.stringify(blogs.blogs));
  return (
    <BlogContainer>
      <FluidContainer>
        <Fade bottom>
          {/* <h1 className='blog-m-title hide-on-desktop'>Blog</h1>
          <h1 className='blog-m-title hide-on-mobile'>Updated News</h1> */}
          <h1 className='blog-m-title'>Blog</h1>
        </Fade>
        {/* <div>{JSON.stringify(LeftChunk)}</div> */}

        <div className='blog-cards-container mt-24 hide-on-desktop'>
          <div></div>
          {blogs.blogs.map((item, index) => {
            return <BlogCard key={index} {...item} />;
          })}
          {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
          <MobileBlogDetail />
        </div>
        <div className='blog-cards-container mt-24  hide-on-mobile desktop-layout '>
          <div className='blog-desk-colum-left'>
            <FeaturedBlogCard {...featured} />
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
              {/* <DesktopBlogCard mRight='15px' mBottom='15px' mTop='30px' />
              <DesktopBlogCard mLeft='15px' mBottom='15px' mTop='30px' />
              <DesktopBlogCard mRight='15px' mBottom='15px' mTop='15px' />
              <DesktopBlogCard mLeft='15px' mBottom='15px' mTop='15px' /> */}
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
            {/* <DesktopBlogCard width='100%' mBottom='15px' />
            <DesktopBlogCard width='100%' mBottom='15px' mTop='15px' />
            <DesktopBlogCard width='100%' mBottom='15px' mTop='15px' /> */}
            {/* <DesktopBlogCard width='100%' mBottom='15px' mTop='15px' /> */}
          </div>
        </div>
      </FluidContainer>

      <Mission />
      <NavBar />
    </BlogContainer>
  );
}

export default Blog;

Blog.getInitialProps = async (ctx) => {
  const res = await fetch('https://blogapi.ourbantaba.com/blogs/all/en');
  const json = await res.json();
  return { blogs: json };
};
