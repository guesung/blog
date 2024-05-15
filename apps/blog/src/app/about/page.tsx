import { ContentPost } from '@components';
import { getContent } from '@utils';

export default function page() {
  const content = getContent({
    series: 'about',
    slug: 'about',
  });

  return <ContentPost {...content} className="max-w-780" />;
}
