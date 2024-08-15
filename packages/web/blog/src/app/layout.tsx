import { Footer, Header, ThemeProvider } from '@components';
import '@guesung/ui/styles.css';
import { cn } from '@guesung/utils';
import { cookies } from 'next/headers';
import './globals.css';

import { Theme } from '@components/provider/ThemeProvider';
import { metadata } from '@constants';
import { JSON_LD_DATA } from '@constants/JsonLd';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import { StrictPropsWithChildren } from '@guesung/constants';

export { metadata };

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({ children }: StrictPropsWithChildren) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value as Theme;

  return (
    <html
      className={cn(pretendard.variable, {
        'bg-black-1': theme === 'dark',
        'bg-white-1': theme === 'light',
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
        {/* Theme */}
        <ThemeProvider initialTheme={theme}>
          <Header />
          <Header.Margin />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      {/* GA */}
      <GoogleAnalytics gaId="G-JB6N95P3H1" />
    </html>
  );
}
