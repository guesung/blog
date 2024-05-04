const config = require('@guesung/tailwind-config/tailwind.config');

module.exports = {
  ...config,
  plugins: [require('@tailwindcss/typography')],
};
