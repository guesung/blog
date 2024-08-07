import { DATA } from './Data';

export const JSON_LD_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: DATA.blog.name,
  description: DATA.blog.description,
  keywords: 'blog, frontend, javascript, react',
  url: 'https://blog.guesung.site',
  image:
    'https://github.com/user-attachments/assets/5c8b9ef8-1a2b-4ecc-b191-4ae95d4c5a00',
  author: {
    '@type': 'Person',
    name: 'https://www.linkedin.com/in/guesung',
  },
  datePublished: '2024-07-30T11:35:00+07:00',
  dateModified: '2024-07-30T11:35:00+07:00',
  publisher: {
    '@type': 'Organization',
    name: '박규성 기술 블로그',
    logo: {
      '@type': 'ImageObject',
      url: 'https://github.com/user-attachments/assets/5c8b9ef8-1a2b-4ecc-b191-4ae95d4c5a00',
    },
  },
  headline: DATA.blog.name,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://blog.guesung.site/series/posts/system',
  },
  articleSection: '시스템으로 성장하기',
  articleBody: '시스템을 사랑한 개발자',
  thumbnailUrl:
    'https://blog.guesung.site/_next/image?url=%2Fcontents%2Fposts%2Fsystem%2Fcover.png&w=1200&q=75',
};
