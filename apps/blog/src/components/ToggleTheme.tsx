'use client';

import { getCookie, setCookie } from '@guesung/utils';
import { useTheme } from './provider/ThemeProvider';
import MoonIcon from '@svgs/moon.svg';
import SunIcon from '@svgs/sun.svg';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    const theme = getCookie('theme');
    if (theme === 'dark') {
      setCookie('theme', 'light');
      setTheme('light');
    } else {
      setCookie('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="dark cursor-pointer" onClick={handleTheme}>
      {theme === 'dark' ? (
        <MoonIcon fill="white" width={30} height={30} />
      ) : (
        <SunIcon width={30} height={30} />
      )}
    </div>
  );
}
