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
      setCookie('theme', 'light'); // 설정값 보존
      setTheme('light'); // 리렌더링
      document.documentElement.classList.remove('dark'); // html에 적용
    } else {
      setCookie('theme', 'dark');
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleTheme}>
      {theme === 'dark' ? (
        <SunIcon fill="white" width={16} height={16} />
      ) : (
        <MoonIcon width={16} height={16} />
      )}
    </div>
  );
}
