import { cn } from '@guesung/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';
import NavLink from './NavLink';
import { ClassNameType } from '@guesung/constants';

interface ListItemProps extends ComponentProps<typeof Link>, ClassNameType {
  coverSrc?: string;
  title: string;
}

export default function ListItem({
  title,
  coverSrc,
  children,
  className,
  ...props
}: PropsWithChildren<ListItemProps>) {
  return (
    <NavLink className={cn('gap-16 p-16 md:flex-row', className)} {...props}>
      {coverSrc && (
        <div className="relative w-full h-240 md:w-320">
          <Image
            src={coverSrc}
            fill
            alt="cover"
            objectFit="cover"
            className="rounded-8"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-8">
        <div className="font-bold text-body1">{title}</div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </NavLink>
  );
}
