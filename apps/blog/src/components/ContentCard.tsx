import { Content } from '@contents';
import { Card, Move, Tag } from '@guesung/ui';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <Move>
      <Card
        key={content._id}
        href={`/series/${content.series}/${content.slug}`}
        {...content}
      >
        <p className="text-slate-500">{content.description}</p>
        <div className="flex gap-4">
          {content.tags?.map(tag => (
            <Tag href={`/tags/${tag}`} key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      </Card>
    </Move>
  );
}
