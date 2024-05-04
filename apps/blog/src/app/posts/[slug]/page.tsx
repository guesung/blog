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
    <div>
      <PostTitle title={title} date={date} />
      <PostContent body={body} />
    </div>
  );
}
