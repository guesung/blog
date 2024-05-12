import { Post } from '@components';
import { getContent } from '@utils';

interface pageProps {
  params: {
    slug: string;
  };
}
export default function page({ params: { slug } }: pageProps) {
  const content = getContent({
    series: 'post',
    slug,
  });

  return <Post {...content} className="max-w-760" />;
}
