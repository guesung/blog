import { Content } from '@contents';
import { Card, Move, Tag } from '@guesung/ui';
import { formatDate } from '@guesung/utils';

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {content.tags?.map(tag => (
              <Tag href={`/tags/${tag}`} key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          <p>{formatDate(content.date)}</p>
        </div>
      </Card>
    </Move>
  );
}
