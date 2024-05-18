import { Content } from '@contents';
import { Card, Tag } from '@guesung/ui';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <Card
      key={content._id}
      href={`/${content.series}/${content.slug}`}
      {...content}
    >
      <p className="text-slate-500">{content.description}</p>
      <div className="flex gap-4">
        {content.tags?.map(tag => (
          <Tag
            className="hover:bg-slate-600 hover:text-white"
            href={`/tags/${tag}`}
            key={tag}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </Card>
  );
}
