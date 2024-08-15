import { Footer, Header } from '@components';
import '@guesung/ui/styles.css';
import { cn } from '@guesung/utils';
import { cookies } from 'next/headers';
import './globals.css';

import { metadata } from '@constants';
import { JSON_LD_DATA } from '@constants/JsonLd';
import { StrictPropsWithChildren } from '@guesung/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';

export { metadata };

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: StrictPropsWithChildren) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <html
      className={cn(pretendard.variable, {
        'bg-black-1 dark': theme === 'dark',
        'bg-white-1': theme === 'light',
      })}
    >
      <body
        className={cn(
          pretendard.className,
          'text-body3 bg-white-1 text-black-1 min-h-screen transition-colors'
        )}
      >
        {/* JSON LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_DATA, null, 2),
          }}
        />
        {/* Theme */}
        {/* <ThemeProvider initialTheme={theme}> */}
        <Header />
        <Header.Margin />
        {children}
        <Footer />
        {/* </ThemeProvider> */}
      </body>
      {/* GA */}
      <GoogleAnalytics gaId="G-JB6N95P3H1" />
    </html>
  );
}
