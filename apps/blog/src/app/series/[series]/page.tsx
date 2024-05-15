import { Card, CardList } from '@components';
import { Content } from '@contents';
import { getContents } from '@utils';

interface pageProps {
  params: {
    series: Content['series'];
  };
}
export default function page({ params: { series } }: pageProps) {
  const contents = getContents({ series });

  return (
    <CardList<Content>
      items={getContents({ series })}
      render={content => (
        <Card
          key={content._id}
          href={`${content.series}/${content.slug}`}
          {...content}
        />
      )}
    />
  );
}
