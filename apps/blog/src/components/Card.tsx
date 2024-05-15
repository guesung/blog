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
      {!coverSrc ? (
        <Image
          src={coverSrc ?? '/contents/etc/cover.png'}
          width={200}
          height={200}
          alt="cover"
        />
      ) : (
        <div />
      )}
      <div className="flex flex-col text-start">
        <div className="text-body2">{title}</div>
        <div className="flex">
          <div>{description}</div>
          <div>{lastModified}</div>
        </div>
      </div>
    </Link>
  );
}
