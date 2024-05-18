import { Content } from '@contents';
import { Card } from '@guesung/ui';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <Card
      key={content._id}
      href={`${content.series}/${content.slug}`}
      {...content}
    >
      {content.description}

      {content.tags?.map(tag => <div key={tag}>{tag}</div>)}
    </Card>
  );
}
