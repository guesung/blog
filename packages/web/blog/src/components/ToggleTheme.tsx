'use client';

import { getCookie, setCookie } from '@guesung/utils';
import { useTheme } from './provider/ThemeProvider';
import MoonIcon from '#images/icons/moon.svg';
import SunIcon from '#images/icons/sun.svg';

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
    <div className="cursor-pointer dark" onClick={handleTheme}>
      {theme === 'dark' ? (
        <SunIcon fill="white" width={30} height={30} />
      ) : (
        <MoonIcon width={30} height={30} />
      )}
    </div>
  );
}
