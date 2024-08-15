import { getCookie } from '@guesung/utils';
import { HeaderWrapper, NavLink, ToggleTheme } from '.';
import { cookies } from 'next/headers';
import { COOKIE_KEY_THEME, Theme } from '@constants';

const NAV_LINK_PROPS_LIST = [
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: 'https://guesung.notion.site',
    children: 'Note',
    target: '_blank',
  },
  // {
  //   href: '/series',
  //   children: 'Series',
  // },
  // {
  //   href: '/playground',
  //   children: '놀이터',
  // },
  // {
  //   href: '/about',
  //   children: 'About',
  // },
  // {
  //   href: '/guestbook',
  //   children: 'Guestbook',
  // },
  // {
  //   href: '/plan',
  //   children: '계획',
  // },
];

export default function Header() {
  const theme = cookies().get(COOKIE_KEY_THEME)?.value as Theme;

  return (
    <HeaderWrapper>
      <header className="text-body3 inset-x-0 flex w-full items-center justify-between py-2">
        <NavLink href="/">Guesung.</NavLink>
        <div className="flex items-center gap-8">
          {NAV_LINK_PROPS_LIST.map(props => (
            <NavLink {...props} />
          ))}
          <ToggleTheme initialTheme={theme} />
        </div>
      </header>
    </HeaderWrapper>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
