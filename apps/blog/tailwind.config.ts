const config = require('@guesung/tailwind-config/tailwind.config');

module.exports = {
  ...config,
  content: [
    './contents/**/*.mdx',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
};
