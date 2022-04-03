/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // domains: ['res.cloudinary.com'],
};

module.exports = nextConfig;

// const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  trailingSlash: true,
  // reactStrictMode: true,

  // domains: ['res.cloudinary.com'],
};

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };
