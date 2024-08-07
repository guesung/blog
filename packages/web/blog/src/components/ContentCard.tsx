import { Content } from '@contents';
import { Card, Move, Tag } from '@guesung/ui';
import { formatShowDate } from '@guesung/utils';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <Move>
      <Card
        href={`/series/${content.series}/${content.slug}`}
        title={content.title}
        coverSrc={content.coverSrc}
      >
        {content.description && (
          <p className="text-white-2">{content.description}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {content.tags?.map(tag => (
              <Tag href={`/tags/${tag}`} key={tag}>
                {tag}
              </Tag>
            ))}
          </div>
          <p>{formatShowDate(content.date)}</p>
        </div>
      </Card>
    </Move>
  );
}
