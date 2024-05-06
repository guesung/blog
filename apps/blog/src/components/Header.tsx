import MoonIcon from '@svgs/moon.svg';
import SunIcon from '@svgs/sun.svg';
import { cookies } from 'next/headers';
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';

export default function Header() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <header className="text-subtitle2 fixed top-0 mx-auto flex w-screen items-center justify-between bg-white px-20 py-16 shadow-xl dark:bg-black">
      <div>
        <Link href="/">Guesung.</Link>
      </div>
      <div className="flex gap-10">
        <span>Note</span>
        <span>About</span>

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
