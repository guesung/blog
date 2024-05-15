import { ContentPost } from '@components';
import { getContent } from '@utils';

export default function page() {
  const content = getContent({
    series: 'etc',
    slug: 'about',
  });

  return <ContentPost {...content} className="max-w-780" />;
}
