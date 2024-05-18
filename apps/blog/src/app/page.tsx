import { ContentCard, ContentLayout } from '@components';
import { Content } from '@contents';
import { CardList } from '@guesung/ui';
import { getContents } from '@utils';

export default function Page() {
  return (
    <ContentLayout className="flex flex-col gap-20">
      <ContentLayout.Title>ALL POSTS.</ContentLayout.Title>
      <CardList<Content>
        items={getContents({ series: 'posts' })}
        render={content => <ContentCard content={content} />}
      />
      <ContentLayout.Title>ALL TRANSLATIONS.</ContentLayout.Title>
      <CardList<Content>
        items={getContents({ series: 'translations' })}
        render={content => <ContentCard content={content} />}
      />
    </ContentLayout>
  );
}
