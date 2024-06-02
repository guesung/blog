import { ContentCard, ContentLayout } from '@components';
import { Content } from '@contents';
import { CardList, Tag } from '@guesung/ui';
import { getAllTag, getContents } from '@utils';

export default function Page() {
  const allTags = getAllTag();
  const postsContents = getContents({ series: 'posts' });
  const translationsContents = getContents({ series: 'translations' });

  return (
    <ContentLayout className="flex flex-col gap-20">
      {/* <div className="max-w-640 mx-auto flex flex-wrap justify-center gap-10">
        {allTags.map(tag => (
          <Tag href={`/tags/${tag}`} key={tag}>
            {tag}
          </Tag>
        ))}
      </div> */}
      <ContentLayout.Title>ALL POSTS.</ContentLayout.Title>
      <CardList<Content>
        items={postsContents}
        render={content => <ContentCard content={content} />}
      />
      {/* <ContentLayout.Title>ALL TRANSLATIONS.</ContentLayout.Title>
      <CardList<Content>
        items={translationsContents}
        render={content => <ContentCard content={content} />}
      /> */}
    </ContentLayout>
  );
}
