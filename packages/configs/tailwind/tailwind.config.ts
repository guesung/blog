import { pxToRemTailwind, colors, fontSize, theme } from './src/style';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      ...fontSize,
      colors,
      theme,
    },
  },
  plugins: [],
};
export default config;
