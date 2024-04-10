import Image from 'next/image';
import Link from 'next/link';
// import { Tag } from '.';

interface CardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
}

export default function Card({
  id,
  title,
  description,
  date,
  tags,
  image,
}: CardProps) {
  return (
    <article>
      <Link href={`posts/${id}`}>
        <div className="h-300 w-400 relative">
          <Image
            src={image}
            alt={title}
            className="rounded-24"
            objectFit="cover"
            fill
          />
        </div>
        {/* <Tag>ddd</Tag> */}
      </Link>
    </article>
  );
}
