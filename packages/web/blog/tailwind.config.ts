import { fontSize, pxToRemTailwind, theme } from '@guesung/tailwind-config/styles';
import config from '@guesung/tailwind-config/tailwind.config';
import {colors, nextui} from "@nextui-org/react";


module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}',"../../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  plugins: [require('@tailwindcss/typography'),nextui()],
  darkMode: 'selector',
  presets: [config],
};
