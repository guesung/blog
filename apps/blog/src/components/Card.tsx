import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface SeriesCardProps extends LinkProps {
  title: string;
  coverSrc: string;
}

export default function Card({
  title,
  coverSrc,
  children,
  ...props
}: PropsWithChildren<SeriesCardProps>) {
  return (
    <Link className="rounded-16 w-full shadow-md" {...props}>
      <div className="h-200 relative">
        <Image
          src={coverSrc ?? '/contents/etc/cover.png'}
          fill
          alt="cover"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-8 px-8 py-16 text-start">
        <div className="text-body2">{title}</div>
        {children}
      </div>
    </Link>
  );
}
