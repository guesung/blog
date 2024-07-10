import { getContent } from '@utils';
import { ContentPost } from '@components';

interface pageProps {
  params: {
    skill: string;
    slug: string;
  };
}

export default function page({ params: { skill, slug } }: pageProps) {
  const translation = getContent({
    series: ['translations'],
    slug: `${skill}/${slug}`,
  });

  return <ContentPost {...translation} className="max-w-1200" />;
}
