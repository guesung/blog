import { ContentPost } from '@components';
import { getContent } from '@utils';

interface pageProps {
  params: {
    slug: string;
  };
}
export default function page({ params: { slug } }: pageProps) {
  const content = getContent({
    series: 'posts',
    slug,
  });

  return <ContentPost {...content} className="max-w-760" />;
}
