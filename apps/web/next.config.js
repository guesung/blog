/** @type {import('next').NextConfig} */
module.exports = {
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
