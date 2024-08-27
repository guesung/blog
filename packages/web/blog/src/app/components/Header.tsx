import { ToggleTheme } from '@components';
import { COOKIE_KEY_THEME, DATA, Theme } from '@constants';
import { Link, Navbar } from '@nextui-org/react';
import { cookies } from 'next/headers';

const NAV_LINK_PROPS_LIST = [
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: '/guestbook',
    children: 'Guestbook',
  },
  {
    href: 'https://guesung.notion.site',
    children: 'Note',
    isExternal: true,
    showAnchorIcon: true,
  },
];

export default function Header() {
  const theme = cookies().get(COOKIE_KEY_THEME)?.value as Theme;

  return (
    <Navbar shouldHideOnScroll className="base">
      <Link href="/" color="foreground">
        {DATA.blog.name}
      </Link>
      <div className="gap-8pxr flex items-center">
        {NAV_LINK_PROPS_LIST.map(props => (
          <Link {...props} color="foreground" />
        ))}
        <ToggleTheme initialTheme={theme} />
      </div>
    </Navbar>
  );
}

function HeaderMargin() {
  return <div className="h-80pxr" />;
}

Header.Margin = HeaderMargin;
