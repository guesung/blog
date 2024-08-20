'use client';

import MoonIcon from '#images/icons/moon.svg';
import SunIcon from '#images/icons/sun.svg';
import { CLASS_NAME_DARK, COOKIE_KEY_THEME, Theme } from '@constants';
import { setCookie } from '@guesung/utils';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface ToggleThemeProps {
  initialTheme: Theme;
}

export default function ToggleTheme({ initialTheme }: ToggleThemeProps) {
  const [theme, setTheme] = useState(initialTheme);

  const makeThemeDark = () => {
    setCookie(COOKIE_KEY_THEME, Theme.DARK);
    setTheme(Theme.DARK);
    document.documentElement.classList.add(CLASS_NAME_DARK);
  };
  const makeThemeLight = () => {
    setCookie(COOKIE_KEY_THEME, Theme.LIGHT); // 새로고침 시 테마 보존
    setTheme(Theme.LIGHT); // 컴포넌트 리렌더링
    document.documentElement.classList.remove(CLASS_NAME_DARK); // html에 테마 적용
  };

  // 초기 테마 설정
  useEffect(() => {
    if (initialTheme === undefined) {
      const isUserPreferColorSchemaDark = window.matchMedia(
        '(prefers-color-scheme:dark)'
      )?.matches;
      if (isUserPreferColorSchemaDark) makeThemeDark();
      else makeThemeLight();
    }
  }, []);

  const handleTheme = () => {
    if (theme === Theme.DARK) makeThemeLight();
    else makeThemeDark();
  };

  return (
    <Button onClick={handleTheme} aria-label="dark mode toggle">
      {theme === Theme.DARK && <SunIcon fill="white" width={16} height={16} />}
      {theme === Theme.LIGHT && <MoonIcon width={16} height={16} />}
    </Button>
  );
}
