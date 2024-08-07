import { ContentPost } from '@components';
import { getContent } from '@utils';

export default function page() {
  const content = getContent({
    slug: 'plan',
  });

  return <ContentPost {...content} />;
}
