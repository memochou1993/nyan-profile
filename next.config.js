const config = require('./nyan.config.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? config.basePath : '',
};

module.exports = nextConfig;
