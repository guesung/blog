import { colors, fontSize, pxToRemTailwind, theme } from '@guesung/styles';

const config = {
  theme: {
    extend: {
      ...pxToRemTailwind,
      colors,
      theme,
      fontSize,
    },
  },
};
export default config;
