const config = require('@guesung/tailwind-config/tailwind.config');

module.exports = {
  ...config,
  content: ['./src/**/*.tsx', './contents/**/*.mdx'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
};
