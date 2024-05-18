import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps,
    ClassNameType {}

export default function NavLink({
  children,
  className,
  ...props
}: PropsWithChildren<NavLinkProps>) {
  return (
    <Link
      {...props}
      className={cn(
        'hover:bg-gray rounded-8 p-16 dark:hover:bg-slate-800',
        className
      )}
    >
      {children}
    </Link>
  );
}
