'use client';

import { getCookie, setCookie } from '@guesung/utils';
import { PropsWithChildren } from 'react';
import { useTheme } from './provider/ThemeProvider';

interface ToggleThemeProps {}
export default function ToggleTheme({
  children,
}: PropsWithChildren<ToggleThemeProps>) {
  const { setTheme } = useTheme();
  const handleTheme = () => {
    const theme = getCookie('theme');
    if (theme === 'dark') {
      setCookie('theme', 'light');
      setTheme('light');
    } else {
      setCookie('theme', 'dark');
      setTheme('dark');
    }
    window.location.reload();
  };
  return (
    <div className="dark" onClick={handleTheme}>
      {children}
    </div>
  );
}
