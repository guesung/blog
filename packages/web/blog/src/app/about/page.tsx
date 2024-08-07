import { MDXContent } from '@components';
import { getContent } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About.',
  description: 'About me',
};

export default function page() {
  const content = getContent({
    slug: 'about',
  });

  return <MDXContent {...content} />;
}
