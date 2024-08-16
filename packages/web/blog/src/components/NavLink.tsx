import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import ArrowOuterIcon from '#images/icons/arrow_outer.svg';
import { SizeClassNameMapType, SizeType } from '@types';

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps,
    ClassNameType {
  size?: SizeType;
}

const sizeClassNameMap: SizeClassNameMapType = {
  small: 'px-4 py-2',
  medium: 'px-8 py-4',
  large: 'px-16 py-8',
};

export default function NavLink({
  children,
  className,
  size = 'medium',
  ...props
}: PropsWithChildren<NavLinkProps>) {
  return (
    <Link
      {...props}
      className={cn(
        'hover:bg-gray-3 rounded-4 flex items-center gap-2 hover:transition',
        sizeClassNameMap[size],
        className
      )}
    >
      {children}
      {props.target === '_blank' && <ArrowOuterIcon />}
    </Link>
  );
}
