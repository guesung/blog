import { ContentCard, ContentLayout } from '@components';
import { Button, CardList, Tag } from '@guesung/ui';
import { getAllTag, getContents } from '@utils';

const notIncluded = ['etc'];

export default function Page() {
  const allTags = getAllTag();
  const postsContents = getContents({
    series: ['posts', 'deep-dive', 'trouble-shooting', 'worried'],
  });

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
      <CardList
        items={postsContents.filter(it => !notIncluded.includes(it.series))}
        render={content => <ContentCard content={content} />}
      />
      <Button>ddddd</Button>
    </ContentLayout>
  );
}
