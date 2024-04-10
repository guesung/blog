import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../../../../apps/web/src/components';
import { VariantEnum } from '@guesung/constants';

interface CardProps {
  id: string;
  title: string;
  date: string;
  tagList: string[];
  image: string;
}

export default function Card({ id, title, date, tagList, image }: CardProps) {
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
          <span className="absolute bottom-12 right-12">{date}</span>
        </div>
        <div className="flex justify-start py-5 gap-5">
          {tagList.map(tag => (
            <Tag key={tag} variant={VariantEnum.outline}>
              {tag}
            </Tag>
          ))}
        </div>
      </Link>
    </article>
  );
}
