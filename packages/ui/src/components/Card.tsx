'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface SeriesCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  coverSrc: string;
  href: string;
}

export default function Card({
  title,
  coverSrc,
  children,
  href,
  ...props
}: PropsWithChildren<SeriesCardProps>) {
  const router = useRouter();
  const handleClick = () => router.push(href);

  return (
    <div
      className="rounded-16 w-full cursor-pointer shadow-md"
      onClick={handleClick}
      {...props}
    >
      <div className="h-200 relative">
        <Image
          src={coverSrc ?? '/contents/etc/cover.png'}
          fill
          alt="cover image"
          className="rounded-t-16 object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 px-8 py-16 text-start">
        <div className="text-body2">{title}</div>
        {children}
      </div>
    </div>
  );
}
