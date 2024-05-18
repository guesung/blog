import { Footer, Header, ThemeProvider } from '@components';
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
          <Header />
          <Header.Margin />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
