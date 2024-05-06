import { Footer, Header } from '@components';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { cn } from '@guesung/utils';

import localFont from 'next/font/local';

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
  const theme = cookieStore.get('theme')?.value;

  return (
    <html
      className={cn(
        pretendard.variable,
        'text-body3 leading-5 dark:bg-black dark:text-white',
        {
          dark: theme === 'dark',
        }
      )}
    >
      <body className={pretendard.className}>
        <Header />
        <Header.Margin />
        {children}
        <Footer />
      </body>
    </html>
  );
}
