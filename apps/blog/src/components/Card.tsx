import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface SeriesCardProps extends LinkProps {
  title: string;
  coverSrc?: string;
  lastModified?: string;
  description?: string;
}


export default function Card({
  title,
  coverSrc,
  lastModified,
  description,
  ...props
}: SeriesCardProps) {
  return (
    <Link className="rounded-16 w-full shadow-sm" {...props}>
      <div className="h-200 relative">
        <Image
          src={coverSrc ?? '/contents/etc/cover.png'}
          fill
          alt="cover"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col px-8 py-16 text-start">
        <div className="text-body2">{title}</div>
        <div className="flex">
          <div>{description}</div>
          <div>{lastModified}</div>
        </div>
      </div>
    </Link>
  );
}
