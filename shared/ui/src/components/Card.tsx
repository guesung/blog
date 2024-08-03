'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface SeriesCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  coverSrc?: string;
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
      className="rounded-16 bg-black-1 flex h-full w-full cursor-pointer flex-col shadow-md"
      onClick={handleClick}
      {...props}
    >
      {coverSrc && (
        <div className="h-200 relative">
          <Image
            src={coverSrc ?? '/contents/etc/cover.png'}
            fill
            alt="cover image"
            className="rounded-t-16 object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-8 px-8 py-16 text-start">
        <div className="text-body2 text-white-1 flex-1">{title}</div>
        {children}
      </div>
    </div>
  );
}
