import { colors, fontSize, pxToRemTailwind, theme } from './styles';

const config = {
  theme: {
    extend: {
      ...pxToRemTailwind,
      theme,
      fontSize,
      colors,
    },
  },
};
export default config;
