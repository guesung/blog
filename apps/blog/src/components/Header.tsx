import MoonIcon from '@svgs/moon.svg';
import SunIcon from '@svgs/sun.svg';
import { cookies } from 'next/headers';
import { NavLink, ToggleTheme } from '.';

const NAV_LINK_PROPS_LIST = [
  {
    href: 'https://note.guesung.site/develop',
    children: 'Note',
    target: '_blank',
  },
  // {
  //   href: '/series',
  //   children: 'Series',
  // },
  {
    href: '/playground',
    children: 'PlayGround',
  },
  {
    href: '/about',
    children: 'About',
  },
  {
    href: '/plan',
    children: 'Plan',
  },
];

export default function Header() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <>
      <div>
        <NavLink href="/" className="text-body2 font-bold">
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
    </>
  );

}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
