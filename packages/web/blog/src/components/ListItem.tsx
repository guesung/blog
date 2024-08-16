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
        <div className="h-240 md:w-320 relative w-full">
          <Image
            src={coverSrc}
            fill
            alt="cover"
            objectFit="cover"
            className="rounded-8"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-8">
        <div className="text-body1 font-bold">{title}</div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </NavLink>
  );
}
