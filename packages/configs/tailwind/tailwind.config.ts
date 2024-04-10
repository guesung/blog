import { colors, fontSize, pxToRemTailwind, theme } from '@guesung/styles';

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
      theme,
      fontSize,
    },
  },
  plugins: [],
};
export default config;
