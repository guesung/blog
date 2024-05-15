import { Content } from '@contents';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface ListItemProps
  extends Pick<Content, 'coverSrc'>,
    Pick<Content, 'title'>,
    LinkProps {}

export default function ListItem({
  title,
  coverSrc,
  children,
  ...props
}: PropsWithChildren<ListItemProps>) {
  return (
    <Link
      className="rounded-16 h-180 hover:bg-gray flex gap-16 p-16"
      {...props}
    >
      <div className="w-270 relative">
        <Image
          src={coverSrc ?? '/contents/etc/cover.png'}
          fill
          alt="cover"
          objectFit="cover"
        />
      </div>
      <div className="flex grow flex-col gap-8">
        <div className="text-body2 font-bold">{title}</div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </Link>
  );
}
