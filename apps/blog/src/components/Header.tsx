import MoonIcon from '@svgs/moon.svg';
import SunIcon from '@svgs/sun.svg';
import { cookies } from 'next/headers';
import { NavLink, ToggleTheme } from '.';

export default function Header() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <header className="text-body2 fixed top-0 z-10 mx-auto flex w-screen items-center justify-between bg-white px-20 py-16 shadow-sm dark:bg-black">
      <div>
        <NavLink href="/">Guesung.</NavLink>
      </div>
      <div className="flex items-center">
        <NavLink href="https://note.guesung.site/develop" target="_blank">
          Note
        </NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/">PlayGround</NavLink>

        <ToggleTheme>
          {theme === 'dark' ? (
            <MoonIcon fill="white" width={30} height={30} />
          ) : (
            <SunIcon width={30} height={30} />
          )}
        </ToggleTheme>
      </div>
    </header>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
