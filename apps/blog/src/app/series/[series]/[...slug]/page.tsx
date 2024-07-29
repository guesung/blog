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
    series: ['posts'],
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

export default function page({ params: { series, slug } }: PageProps) {
  const content = getContent({
    series,
    slug: typeof slug === 'string' ? slug : slug.join('/'),
  });
  console.log(slug);

  return <ContentPost {...content} className="max-w-1000" />;
}
