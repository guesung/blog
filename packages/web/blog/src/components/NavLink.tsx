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
  small: 'px-4pxr py-2pxr',
  medium: 'px-8pxr py-4pxr',
  large: 'px-1pxr6 py-8pxr',
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
        sizeClassNameMap[size],
        className
      )}
    >
      
      {children}
      {props.target === '_blank' && <ArrowOuterIcon />}
    </Link>
  );
}
