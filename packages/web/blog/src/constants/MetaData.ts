import { Metadata } from 'next';
import { DATA } from './Data';

export const metadata: Metadata = {
  title: DATA.blog.name,
  description: DATA.blog.description,
  verification: {
    google: 'ydZVzq0xbjyB0kO5I4Rmi1U-fB60L0eThb2a4K62KCo',
    other: {
      'naver-site-verification': '030114aa4592fdf3cee71d19dae3c4a36aa1bbe5',
    },
  },
};
