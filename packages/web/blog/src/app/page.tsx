import { MDXContent } from '@components';
import { getContent } from '@utils';

export default function Page() {
  const content = getContent({
    slug: 'about',
  });

  return <MDXContent {...content} title="" date="" />;
}
