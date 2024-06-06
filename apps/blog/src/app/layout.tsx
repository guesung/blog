import { Footer, Header, HeaderWrapper, ThemeProvider } from '@components';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { cn } from '@guesung/utils';

import localFont from 'next/font/local';
import { Theme } from '@components/provider/ThemeProvider';

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Guesung Blog',
  description: 'Welcome to Guesung Blog!',
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
    <html className={cn(pretendard.variable)}>
      <body className={pretendard.className}>
        <ThemeProvider
          className="text-body3 dark:bg-black dark:text-white"
          initialTheme={theme}
        >
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Header.Margin />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
