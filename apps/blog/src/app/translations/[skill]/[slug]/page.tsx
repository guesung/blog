import { getContent } from '@utils';
import { Post } from '@components';

interface pageProps {
  params: {
    skill: string;
    slug: string;
  };
}

export default function page({ params: { skill, slug } }: pageProps) {
  const translation = getContent({ series: '번역', slug: `${skill}/${slug}` });

  return <Post {...translation} className="max-w-1200" />;
}
