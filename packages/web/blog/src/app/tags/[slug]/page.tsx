import { ContentCard, Layout } from '@components';
import { Content } from '@contents';
import { CardList } from '@guesung/ui';
import { getContentsByTag } from '@utils';

interface pageProps {
  params: {
    slug: string;
  };
}
export default function page({ params: { slug } }: pageProps) {
  const contents = getContentsByTag(slug);

  return (
    <Layout>
      <Layout.Title>{slug}</Layout.Title>
      <CardList<Content>
        items={contents}
        render={content => <ContentCard content={content} />}
      />
    </Layout>
  );
}
