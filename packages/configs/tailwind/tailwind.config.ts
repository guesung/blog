import { colors, fontSize, pxToRemTailwind, theme } from '@guesung/styles';

const config = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
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
