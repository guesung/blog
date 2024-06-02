import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import ArrowOuterIcon from '@svgs/arrow_outer.svg';

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
        'hover:bg-gray rounded-16 flex items-center gap-4 p-16 dark:hover:bg-slate-600',
        className
      )}
    >
      {children}
      {props.target === '_blank' && <ArrowOuterIcon />}
    </Link>
  );
}
