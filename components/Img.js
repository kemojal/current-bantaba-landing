import React from 'react';

import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `/assets/images/${src}?w=${width}&q=${quality || 100}`;
};

export const Img = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  quality,
  
}) => {
  return (
    <Image
      loader={myLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
    />
  );
};
