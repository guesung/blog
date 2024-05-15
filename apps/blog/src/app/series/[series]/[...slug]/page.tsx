import { Post } from '@components';
import { Content } from '@contents';
import { getContent } from '@utils';

interface pageProps {
  params: {
    series: Content['series'];
    slug: string | string[];
  };
}
export default function page({ params: { series, slug } }: pageProps) {
  const content = getContent({
    series,
    slug: typeof slug === 'string' ? slug : slug.join('/'),
  });

  return <Post {...content} className="max-w-760" />;
}
