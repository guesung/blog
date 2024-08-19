import '@guesung/ui/styles.css';
import { cn } from '@guesung/utils';
import { cookies } from 'next/headers';
import './globals.css';

import { CLASS_NAME_DARK, COOKIE_KEY_THEME, metadata, Theme } from '@constants';
import { JSON_LD_DATA } from '@constants/JsonLd';
import { StrictPropsWithChildren } from '@guesung/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import { Footer, Header } from './components';

export { metadata };

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: StrictPropsWithChildren) {
  const cookieStore = cookies();
  const theme = cookieStore.get(COOKIE_KEY_THEME)?.value as Theme;

  return (
    <html
      className={cn(
        pretendard.variable,
        'text-black-1 text-body3 bg-transition min-h-screen',
        {
          dark: theme === CLASS_NAME_DARK,
        }
      )}
    >
      <body className={cn(pretendard.className)}>
        {/* JSON LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_DATA, null, 2),
          }}
        />
        <Header />
        <Header.Margin />
        {children}
        <Footer />
      </body>
      {/* GA */}
      <GoogleAnalytics gaId="G-JB6N95P3H1" />
    </html>
  );
}
