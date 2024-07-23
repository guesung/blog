import config from '@guesung/tailwind-config/tailwind.config';

module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
  presets: [config],
};