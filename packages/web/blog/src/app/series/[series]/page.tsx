import { Layout, ContentListItem } from '@components';
import { matchingKorean } from '@constants';
import { Content } from '@contents';
import { getAllContents } from '@utils';

interface pageProps {
  params: {
    series: Content['series'];
  };
}
export default function page({ params: { series } }: pageProps) {
  return (
    <Layout>
      <Layout.Title>{matchingKorean[series]}</Layout.Title>
      <Layout.Description>
        {matchingKorean[series]} 시리즈입니다
      </Layout.Description>
      {getAllContents().map(content => (
        <ContentListItem {...content} href={`${series}/${content.slug}`} />
      ))}
    </Layout>
  );
}
