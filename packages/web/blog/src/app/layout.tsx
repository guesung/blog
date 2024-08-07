import { Footer, Header, HeaderWrapper, ThemeProvider } from '@components';
import '@guesung/ui/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { cn } from '@guesung/utils';

import localFont from 'next/font/local';
import { Theme } from '@components/provider/ThemeProvider';
import { GoogleAnalytics } from '@next/third-parties/google';

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Guesung Blog',
  description: '안녕하세요, 프론트엔드 개발자 박규성입니다.',
  verification: {
    google: 'ydZVzq0xbjyB0kO5I4Rmi1U-fB60L0eThb2a4K62KCo',
    other: {
      'naver-site-verification': '030114aa4592fdf3cee71d19dae3c4a36aa1bbe5',
    },
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Guesung Blog',
  description: '안녕하세요, 프론트엔드 개발자 박규성입니다.',
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
  headline: 'Guesung Blog',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://blog.guesung.site/series/posts/system',
  },
  articleSection: '시스템으로 성장하기',
  articleBody: '시스템을 사랑한 개발자',
  thumbnailUrl:
    'https://blog.guesung.site/_next/image?url=%2Fcontents%2Fposts%2Fsystem%2Fcover.png&w=1200&q=75',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value as Theme;

  return (
    <html
      className={cn(pretendard.variable, {
        'bg-black-1': theme === 'dark',
        'bg-white-1': theme !== 'dark',
      })}
    >
      <body className={pretendard.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData, null, 2),
          }}
        />
        <ThemeProvider initialTheme={theme}>
          <Header />
          <Header.Margin />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-JB6N95P3H1" />
    </html>
  );
}
