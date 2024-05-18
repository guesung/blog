import { Card, CardList, ContentLayout } from '@components';
import { Content } from '@contents';
import { getContents } from '@utils';

export default function Page() {
  return (
    <ContentLayout className="flex flex-col gap-20">
      <ContentLayout.Title>ALL POSTS.</ContentLayout.Title>
      <CardList<Content>
        items={getContents({ series: 'posts' })}
        render={content => (
          <Card
            key={content._id}
            href={`${content.series}/${content.slug}`}
            {...content}
          >
            {content.description}
            {content.tags?.map(tag => <div key={tag}>{tag}</div>)}
          </Card>
        )}
      />
      <ContentLayout.Title>ALL TRANSLATIONS.</ContentLayout.Title>
      <CardList<Content>
        items={getContents({ series: 'translations' })}
        render={content => (
          <Card
            key={content._id}
            href={`translations/${content.slug}`}
            {...content}
          />
        )}
      />
    </ContentLayout>
  );
}
