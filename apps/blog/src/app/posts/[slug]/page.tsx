import { getContent } from '@utils';
import { PostContent, PostTitle } from './components';

interface pageProps {
  params: {
    slug: string;
  };
}
export default function page({ params: { slug } }: pageProps) {
  const { title, date, body } = getContent({ slug });

  return (
    <div className="max-w-760 mx-auto">
      <PostTitle title={title} date={date} />
      <PostContent body={body} />
    </div>
  );
}
