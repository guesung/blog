const config = require('@guesung/tailwind-config/tailwind.config');

module.exports = {
  ...config,
  content: ['./src/**/*.tsx'],
  plugins: [require('@tailwindcss/typography')],
};
