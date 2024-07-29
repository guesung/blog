import { ContentPost } from '@components';
import { Content } from '@contents';
import { getContent } from '@utils';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
  params: {
    series: Content['series'][];
    slug: string | string[];
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const content = getContent({
    slug: typeof slug === 'string' ? slug : slug.join('/'),
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: content.title,
    openGraph: {
      images: [content.coverSrc, ...previousImages],
    },
  };
}

export default function page({ params: { slug } }: PageProps) {
  const content = getContent({
    slug: typeof slug === 'string' ? slug : slug.join('/'),
  });

  return <ContentPost {...content} className="max-w-1000" />;
}
