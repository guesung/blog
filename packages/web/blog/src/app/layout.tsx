import { Footer, Header, HeaderWrapper, ThemeProvider } from '@components';
import '@guesung/ui/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { cn } from '@guesung/utils';

import localFont from 'next/font/local';
import { Theme } from '@components/provider/ThemeProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import { JSON_LD_DATA } from '@constants/JsonLd';

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
        {/* JSON LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_DATA, null, 2),
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
