/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  transpilePackages: ['@guesung/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
