import { ContentLayout, ContentListItem } from '@components';
import { matchingKorean } from '@constants';
import { Content } from '@contents';
import { getContents } from '@utils';

interface pageProps {
  params: {
    series: Content['series'];
  };
}
export default function page({ params: { series } }: pageProps) {
  const contents = getContents({ series });
  console.log(contents);

  return (
    <ContentLayout>
      <ContentLayout.Title>{matchingKorean[series]}</ContentLayout.Title>
      <ContentLayout.Description>
        {matchingKorean[series]}입니다
      </ContentLayout.Description>
      {contents.map(content => (
        <ContentListItem
          {...content}
          coverSrc={content.coverSrc}
          href={`${series}/${content.slug}`}
        />
      ))}
    </ContentLayout>
  );
}
