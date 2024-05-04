import { getPost } from '@utils';
import { PostContent, PostTitle } from './components';

interface pageProps {
  params: {
    slug: string;
  };
}
export default function page({ params: { slug } }: pageProps) {
  const { title, date, body } = getPost({ slug });

  return (
    <div className="max-w-1000 mx-auto">
      <PostTitle title={title} date={date} />
      <PostContent body={body} />
    </div>
  );
}