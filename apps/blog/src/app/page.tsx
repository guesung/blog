import { ContentCard, ContentLayout } from '@components';
import { Content } from '@contents';
import { CardList, Tag } from '@guesung/ui';
import { getAllTag, getAllContents } from '@utils';

const notShowSeries: Partial<Content['series']>[] = ['translations', 'etc'];

export default function Page() {
  const allTags = getAllTag();

  return (
    <ContentLayout className="flex flex-col gap-20">
      <div className="max-w-640 mx-auto flex flex-wrap justify-center gap-10">
        {allTags.map(tag => (
          <Tag href={`/tags/${tag}`} key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
      <ContentLayout.Title>ALL POSTS.</ContentLayout.Title>
      <CardList
        items={getAllContents().filter(
          content => !notShowSeries.includes(content.series)
        )}
        render={content => <ContentCard content={content} />}
      />
    </ContentLayout>
  );
}
