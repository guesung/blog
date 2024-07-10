import { ContentPost } from '@components';
import { getContent } from '@utils';

export default function page() {
  const content = getContent({
    series: ['etc'],
    slug: 'plan',
  });

  return <ContentPost {...content} className="max-w-780" />;
}
