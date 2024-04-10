import { pxToRemTailwind, colors, fontSize, theme } from './src/style';

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
