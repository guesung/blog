'use client';

import { getCookie, setCookie } from '@guesung/utils';
import { PropsWithChildren } from 'react';

interface ToggleThemeProps {}
export default function ToggleTheme({
  children,
}: PropsWithChildren<ToggleThemeProps>) {
  const handleTheme = () => {
    const theme = getCookie('theme');
    if (theme === 'dark') {
      setCookie('theme', 'light');
    } else {
      setCookie('theme', 'dark');
    }
    window.location.reload();
  };
  return <div onClick={handleTheme}>{children}</div>;
}
