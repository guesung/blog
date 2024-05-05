/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  transpilePackages: ['@guesung/ui'],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
