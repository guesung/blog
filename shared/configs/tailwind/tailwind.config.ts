import { colors, fontSize, pxToRemTailwind, theme } from './styles';

const config = {
  theme: {
    extend: {
      // ...pxToRemTailwind,
      theme,
      fontSize,
      colors,
      spacing: {
        // ...pxToRemTailwind.spacing,
        layout: '50rem',
      },
    },
  },
};
export default config;
