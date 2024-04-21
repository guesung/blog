/** @type {import('next').NextConfig} */
const createMDX = require('@next/mdx');

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
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({});

module.exports = withMDX(nextConfig);