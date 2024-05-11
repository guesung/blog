import { getContent } from '@utils';
import { PostContent, PostTitle } from './components';

interface pageProps {
  params: {
    skill: string;
    slug: string;
  };
}
export default function page({ params: { skill, slug } }: pageProps) {
  const translation = getContent({ series: '번역', slug: `${skill}/${slug}` });

  return (
    <div className="max-w-1200 mx-auto px-20">
      <PostTitle title={slug} date={translation.date} />
      <PostContent body={translation.body} />
    </div>
  );
}
