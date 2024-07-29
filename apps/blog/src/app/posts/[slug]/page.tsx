import { ContentPost } from '@components';
import { getContent } from '@utils';
import type { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const content = getContent({
    series: ['posts'],
    slug,
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: 'bb',
    openGraph: {
      images: [content.coverSrc, ...previousImages],
    },
  };
}

export default function page({ params: { slug } }: PageProps) {
  const content = getContent({
    series: ['posts'],
    slug,
  });

  return <ContentPost {...content} className="max-w-1000" />;
}
