import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps {}

export default function NavLink({
  children,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  return (
    <Link {...props} className="hover:bg-gray rounded-8 px-16 py-8">
      {children}
    </Link>
  );
}
