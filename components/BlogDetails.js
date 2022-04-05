import React, { useContext } from 'react';
import { FluidContainer } from '../components/FluidContainer';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import { Img } from '../components/Img';
import { Mission } from '../Sections/Mission';
import { NavBar } from '../Sections/NavBar';
import SocialContainer from '../components/SocialContainer';

import { GlobalContext } from '../context/GlobalState';

import Image from 'next/image';

import { useRouter } from 'next/router';

import en from '../lang/en';
import fr from '../lang/fr';

const BlogDetailContainer = styled.div`
  width: 99%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  margin-top: 75px;
  padding-bottom: 0;
  border-radius: 20px;
  position: fixed;
  background-color: #f2f2f2;
  overflow: scroll;
  height: 100vh;
  top: 0;
  box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
  .close-detail-btn {
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #04853a;
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    position: fixed;
    top: 100px;
    z-index: 99;
    color: white;
    left: 120px;
  }

  .tags {
    width: 100%;
    text-align: center;
  }
  .title-span {
    width: 100%;
  }
  .reading-col {
    background-color: white;
    padding: 25px 15px;
    overflow: hidden;
    border-radius: 15px;
    /* padding: 15px; */
  }
  .related-blogs-container {
    background-color: white;
    padding: 25px 15px;
    overflow: hidden;
    border-radius: 15px;
  }
  @media (min-width: 1280px) {
    /* padding-top: 64px; */

    .detail-row {
      width: 100%;
      display: flex;
    }
    .reading-col {
      position: relative;
      width: calc(67% - 15px);
      margin-right: 15px;
      /* padding: 15px; */
    }
    .related-blogs-container {
      margin-left: 15px;
      width: calc(33% - 15px);
      padding: 25px 15px;
      border-radius: 10px;
      border: 1px solid #f8f8f8;
      box-shadow: 1.91534px 3.83069px 100px 1.91534px rgba(166, 166, 166, 0.15);
      height: auto;
      /* margin-top: 105px; */
    }

    .blog-title {
      ont-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 130%;
      color: #011108;
    }
    .imageWrapper {
      position: relative;
      /* width: 1146px;
      height: 583px; */

      position: relative;
      /* width: 730px; */
      width: 100%;
      height: 371px;
      margin-top: 20px;
    }
    .category-row {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 22px 0;
      margin-bottom: 0;
    }
    .b-category {
      color: #009743;
      background: #f0f7f2;
      border-radius: 5px;
      padding: 0px 10px;
      margin-right: 5px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
    }
    .read-time {
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
    .read-time-icon {
      width: 26px;
      height: 26px;
      position: relative;
    }
    .footer-row,
    .social-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
    }
    .author {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 160%;
      color: #011108;
    }
    .tags {
      width: auto;
      font-size: 13px;
      margin-left: 50px;
      text-align: left;
    }
    .tags span {
      background-color: #ebf5ed;
      color: #04853a;
      margin: 0 2px;
    }
    .social-container {
      display: flex;
      align-items: center;
      /* background-color: orange; */
      /* width: 300px; */
    }
    .share-text {
      margin-right: 15px;
    }
    .blog-text-container {
      width: 100%;
      max-width: 1126px;
    }
    .blog-text-container p {
      margin-bottom: 1.25rem;
      font-size: 18px;
      line-height: 160%;
      font-style: normal;
      color: #5b615e;
    }

    /* p.ib.ic.cq.dx.id.ie.if.ig.ih.ii.ij.ik.il.im.in.io.ip.iq.ir.is.it.iu.iv.iw.ix.iy.dn strong{
  font-size: 16px;
  font-weight: 600;
} */
    .blog-text-container h3,
    strong {
      margin: 5px 0;
      font-style: normal;
      font-weight: 600;
      font-family: 'Poppins';
      font-size: 25px;
      line-height: 160%;
      color: #011108;
    }
    .text-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 160%;
    }
    .normal-text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      color: #5b615e;
    }
    .related-list {
      border-bottom: 1px solid #f8f8f8;
      margin: 5px 0;
      padding: 5px 0;
      cursor: pointer;
    }
    .related-blogs--container-header {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 130%;
      color: #011108;
    }
    .related-list-title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 130%;
    }
    .related-list-footer {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 160%;
      color: #5b615e;
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      margin-top: 5px;
      /* background-color: green; */
    }
    .category {
      color: #009743;
      background: #f0f7f2;
      border-radius: 5px;
      padding: 0px 10px;
      margin-right: 5px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
    }
    .read-time {
      /* margin-left: 10px; */
      display: flex;
      align-items: center;
    }
    .read-time-icon {
      width: 26px;
      height: 26px;
      position: relative;
    }
    .f-read-time-label {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-align: right;
      margin-left: 10px;
    }
  }
  @media (max-width: 1279px) {
    .detail-row {
      position: relative;
      flex-direction: column;
      .reading-col {
        width: 100%;
        margin: 0;
        padding: 15px;
        /* padding: 15px; */
      }
      .related-blogs-container {
        margin: 0;
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #f8f8f8;
        box-shadow: 1.91534px 3.83069px 100px 1.91534px
          rgba(166, 166, 166, 0.15);
        height: auto;
        margin-top: 15px;
        display: none;
      }
      .blog-title {
        ont-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 130%;
        color: #011108;
      }

      .imageWrapper {
        position: relative;
        /* width: 1146px;
      height: 583px; */

        position: relative;
        /* width: 730px; */
        width: 100%;
        height: 371px;
        margin-top: 20px;
      }
      .category-row {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 22px 0;
        margin-bottom: 0;
      }
      .b-category {
        color: #009743;
        background: #f0f7f2;
        border-radius: 5px;
        padding: 0px 10px;
        margin-right: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
      }
      .read-time {
        margin-left: 10px;
        display: flex;
        align-items: center;
      }
      .read-time-icon {
        width: 26px;
        height: 26px;
        position: relative;
      }
      .footer-row,
      .social-row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0;
        flex-direction: column;
      }
      .author {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        color: #011108;
      }

      .social-container {
        display: flex;
        align-items: center;
        /* background-color: orange; */
        /* width: 300px; */
      }

      .share-text {
        margin-right: 15px;
      }
      .blog-text-container {
        width: 100%;
        max-width: 1126px;
        font-family: 'Poppins';
      }
      .blog-text-container p {
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 160%;
        font-style: normal;
        color: #5b615e;
      }
      .blog-text-container h3,
      strong {
        margin: 5px 0;
        font-style: normal;
        font-weight: 600;
        font-family: 'Poppins';
        font-size: 20px;
        line-height: 160%;
        color: #011108;
      }
      .text-title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 160%;
      }
      .normal-text {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        color: #5b615e;
      }
      .related-list {
        border-bottom: 1px solid #f8f8f8;
        margin: 5px 0;
        padding: 5px;
        width: 100%;
        background-color: red;
      }
      .related-blogs--container-header {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 130%;
        color: #011108;
      }
      .related-list-title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 130%;
      }
      .related-list-footer {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        color: #5b615e;
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        /* background-color: green; */
      }
      .category {
        color: #009743;
        background: #f0f7f2;
        border-radius: 5px;
        padding: 0px 10px;
        margin-right: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
      }
      .read-time {
        /* margin-left: 10px; */
        display: flex;
        align-items: center;
      }
      .read-time-icon {
        width: 26px;
        height: 26px;
        position: relative;
      }
      .f-read-time-label {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: right;
        margin-left: 10px;
      }
    }

    .close-detail-btn {
      left: 20px;
      top: 80px;
    }
  }
`;
const ArrowWrapper = styled.div`
  position: relative;
  height: 12px;
  width: 14px;
  display: flex;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  transform: scaleX(-1);
  &:before {
    width: 40px;
    height: 0px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    content: '';
  }
`;

const BlogDetail = ({
  title,
  category,
  read_time,
  full_text,
  summary,
  cover_img,
  author,
  tags,
  related,
}) => {
  const socialList = [
    {
      scrDesktop: 'twiiter-d.svg',
    },
    {
      scrDesktop: 'facebook-d.svg',
    },
    {
      scrDesktop: 'instagram-d.svg',
    },
    {
      scrDesktop: 'linkedin-d.svg',
    },
  ];
  // const relatedNews = [
  //   {
  //     title: 'What makes a Perfect Pitch Deck?',
  //     readTime: 3,
  //     category: 'Tech',
  //   },
  //   {
  //     title: 'Challenges faced by female Entrepreneurs in Africa',
  //     readTime: 3,
  //     category: 'Tech',
  //   },
  //   {
  //     title: 'Why you should mentor a start-up in Africa',
  //     readTime: 3,
  //     category: 'Tech',
  //   },
  //   {
  //     title: 'Relief for African startups as Bantaba platform goes live',
  //     readTime: 3,
  //     category: 'Tech',
  //   },
  //   {
  //     title: 'These are the leading investment countries in Africa',
  //     readTime: 3,
  //     category: 'Tech',
  //   },
  // ];

  const RenderHTML = (props) => (
    <span dangerouslySetInnerHTML={{ __html: props.HTML }}></span>
  );
  const closeDetail = () => {
    showBlogDetailFunction(false);
  };
  const showDetail = (item) => {
    setBlogDetailFunction(item);
  };

  const { currentDetail, showBlogDetailFunction, setBlogDetailFunction } =
    useContext(GlobalContext);

  const router = useRouter();
  const { locale } = router;
  const lan = locale == 'en' ? en : fr;

  return (
    <BlogDetailContainer>
      <FluidContainer>
        <div className='detail-row'>
          <div className='reading-col'>
            <p className='blog-title'>
              <button className='close-detail-btn' onClick={closeDetail}>
                <ArrowWrapper>
                  <Img
                    src='arrow.svg'
                    alt='logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </ArrowWrapper>
                Back
              </button>

              <span className='title-span'>{currentDetail.title}</span>
            </p>
            <div className='imageWrapper'>
              {currentDetail.cover_img && (
                <Image
                  src={currentDetail?.cover_img}
                  alt='logo'
                  layout='fill'
                  objectFit='cover'
                />
              )}
            </div>
            <div className='category-row'>
              <Fade bottom>
                <p className='b-category'>{currentDetail.category}</p>
              </Fade>
              <div className='read-time'>
                <Fade bottom>
                  <div className='read-time-icon'>
                    <Img
                      src='read-time-icon.svg'
                      alt='logo'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <span className='f-read-time-label'>
                    Read {currentDetail.read_time}
                  </span>
                </Fade>
              </div>
            </div>
            <div className='social-row'>
              <div className='author'>Author: {currentDetail.author}</div>
              <div className='social-container'>
                <span className='share-text'>Share:</span>
                <Fade bottom>
                  <SocialContainer socialList={socialList} />
                </Fade>{' '}
              </div>
            </div>
            <div className='blog-text-container'>
              <div
                className='blog-text-container'
                dangerouslySetInnerHTML={{ __html: currentDetail.full_text }}
              />

              <div className='footer-row'>
                <div className='social-container'>
                  <Fade bottom>
                    <span className='share-text'>Share this article:</span>
                  </Fade>
                  <Fade bottom>
                    <SocialContainer socialList={socialList} />
                  </Fade>{' '}
                </div>
                <div className='author tags'>
                  Tags:{' '}
                  {tags.map((tag, i) => (
                    <span key={i}>{tag.name + ', '}</span>
                  ))}
                  {/* Tags: Tech, Science XXX */}
                </div>
              </div>
            </div>
          </div>
          <div className='related-blogs-container'>
            <p className='related-blogs--container-header'>Related Blogs</p>
            <ul className='related-blog-list-container'>
              {related.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      showDetail(item);
                    }}
                    key={index}
                    className='related-list'
                  >
                    <Fade bottom>
                      <p className='related-list-title'>{item.title}</p>
                    </Fade>
                    <div className='related-list-footer'>
                      <Fade bottom>
                        <span className='category'>{item.category}</span>
                      </Fade>
                      <div className='read-time'>
                        <Fade bottom>
                          <div className='read-time-icon'>
                            <Img
                              src='read-time-icon.svg'
                              alt='logo'
                              layout='fill'
                              objectFit='cover'
                            />
                          </div>
                        </Fade>
                        <Fade bottom>
                          <span className='f-read-time-label'>
                            Read {item.read_time}
                          </span>
                        </Fade>
                      </div>
                      <span className='related-read-time'></span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </FluidContainer>
      <Mission />
      <NavBar locale={lan} router={router} />
    </BlogDetailContainer>
  );
};

export default BlogDetail;
