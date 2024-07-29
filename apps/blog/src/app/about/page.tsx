import { ContentPost } from '@components';
import { getContent } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About.',
  description: 'About me',
};
 


export default function page() {
  const content = getContent({
    series: ['etc'],
    slug: 'about',
  });

  return <ContentPost {...content} className="max-w-780" />;
}
