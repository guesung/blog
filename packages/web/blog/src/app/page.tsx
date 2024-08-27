import { MDXContent } from '@components';
import { content } from '@utils';

export default function Page() {
  const contents = content.getContentBySlug('about');

  if (!contents) return null;

  return <MDXContent {...contents} title="" date="" />;
}
