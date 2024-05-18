import MoonIcon from '@svgs/moon.svg';
import SunIcon from '@svgs/sun.svg';
import { cookies } from 'next/headers';
import { NavLink, HeaderWrapper, ToggleTheme } from '.';

const NAV_LINK_PROPS_LIST = [
  {
    href: 'https://note.guesung.site/develop',
    children: 'Note',
    target: '_blank',
  },
  {
    href: '/series',
    children: 'Series',
  },
  {
    href: '/about',
    children: 'About',
  },
  {
    href: '/playground',
    children: 'PlayGround',
  },
];

export default function Header() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <HeaderWrapper>
      <div>
        <NavLink href="/" className="text-subtitle3">
          Guesung.
        </NavLink>
      </div>
      <div className="flex items-center">
        {NAV_LINK_PROPS_LIST.map(props => (
          <NavLink {...props} />
        ))}
        <ToggleTheme>
          {theme === 'dark' ? (
            <MoonIcon fill="white" width={30} height={30} />
          ) : (
            <SunIcon width={30} height={30} />
          )}
        </ToggleTheme>
      </div>
    </HeaderWrapper>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
