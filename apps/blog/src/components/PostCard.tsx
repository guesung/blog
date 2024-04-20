import { VariantEnum } from '@guesung/constants';
import { Card, Tag } from '@guesung/ui';
import Image from 'next/image';

interface PostCardProps {
  id: string;
  title: string;
  date: string;
  tagList: string[];
  image: string;
}

export default function PostCard({
  id,
  title,
  date,
  tagList,
  image,
}: PostCardProps) {
  return (
    <Card href={`/posts/${id}`}>
      <Card.Header>
        <Image
          src={image}
          alt={title}
          className="rounded-24"
          objectFit="cover"
          fill
        />
        <span className="absolute bottom-12 right-12">{date}</span>
      </Card.Header>
      <Card.Content>
        <div className="flex justify-start py-5 gap-5">
          {tagList.map(tag => (
            <Tag key={tag} variant={VariantEnum.outline}>
              {tag}
            </Tag>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
}
