'use client';

import MoonIcon from '#images/icons/moon.svg';
import SunIcon from '#images/icons/sun.svg';
import { CLASS_NAME_DARK, COOKIE_KEY_THEME, Theme } from '@constants';
import { setCookie } from '@guesung/utils';
import { useState } from 'react';

interface ToggleThemeProps {
  initialTheme: Theme;
}

export default function ToggleTheme({ initialTheme }: ToggleThemeProps) {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    if (theme === Theme.DARK) {
      setCookie(COOKIE_KEY_THEME, Theme.LIGHT); // 설정값 보존
      setTheme(Theme.LIGHT); // 상태값 변경
      document.documentElement.classList.remove(CLASS_NAME_DARK); // html에 적용
    } else {
      setCookie(COOKIE_KEY_THEME, Theme.DARK);
      setTheme(Theme.DARK);
      document.documentElement.classList.add(CLASS_NAME_DARK);
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleTheme}>
      {theme === Theme.DARK && <SunIcon fill="white" width={16} height={16} />}
      {theme === Theme.LIGHT && <MoonIcon width={16} height={16} />}
    </div>
  );
}
