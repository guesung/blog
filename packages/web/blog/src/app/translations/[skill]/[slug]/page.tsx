import { getContent } from '@utils';
import { MDXContent } from '@components';

interface pageProps {
  params: {
    skill: string;
    slug: string;
  };
}

export default function page({ params: { skill, slug } }: pageProps) {
  const translation = getContent({
    slug: `${skill}/${slug}`,
  });

  return <MDXContent {...translation} className="max-w-1200" />;
}
