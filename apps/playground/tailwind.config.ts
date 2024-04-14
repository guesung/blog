import type { Config } from "tailwindcss";
import {         colors, pxToRemTailwind } from './src/style';


const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
    },
  },
  plugins: [],
};
export default config;

