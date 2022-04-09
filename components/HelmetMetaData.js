import React from 'react';
import { Helmet } from 'react-helmet';
// import {useLocation} from "react-router-dom";
const HelmetMetaData = (props) => {
  let currentUrl = 'https://jugendmarkt.bausparen-test.lbs-bayern.de';
  let quote = props.quote !== undefined ? props.quote : '';
  let title = props.title !== undefined ? props.title : 'project title';
  let image = props.image !== undefined ? props.image : '';
  let description =
    props.description !== undefined ? props.description : 'project description';
  let hashtag = props.hashtag !== undefined ? props.hashtag : '#hashtag';
  console.log('images', props.image);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta charset='utf-8' />
      <meta itemprop='name' content='LBS App' />
      <meta itemprop='description' content={description} />
      <meta itemprop='image' content={image} />
      <meta property='type' content='website' />
      <meta property='url' content={currentUrl} />
      <meta property='title' content={title} />
      <meta property='quote' content={quote} />
      <meta name='description' content={description} />
      <meta property='image' content={image} />
      <meta property='og:locale' content='de_DE' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:quote' content={quote} />
      <meta property='og:hashtag' content={hashtag} />
      <meta property='og:image' content={image} />
      {/*<meta content="image/*" property="og:image:type"/>*/}
      <meta property='og:url' content={currentUrl} />
      <meta property='og:site_name' content='LBS' />
      <meta property='og:description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default HelmetMetaData;
