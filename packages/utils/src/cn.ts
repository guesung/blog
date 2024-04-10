import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { fontSize } from '@guesung/styles';

import type { ClassValue } from 'clsx';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: Object.keys(fontSize),
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};
