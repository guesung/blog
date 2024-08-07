import { HeaderWrapper, NavLink, ToggleTheme } from '.';

const NAV_LINK_PROPS_LIST = [
  {
    href: '/library',
    children: 'Library',
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
  return (
    <HeaderWrapper>
      <header className="inset-x-0 flex items-center justify-between w-full py-2 text-body3">
        <NavLink href="/">Guesung.</NavLink>
        <div className="flex items-center gap-8">
          {NAV_LINK_PROPS_LIST.map(props => (
            <NavLink {...props} />
          ))}
          <ToggleTheme />
        </div>
      </header>
    </HeaderWrapper>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
