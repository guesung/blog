import { MDXContent } from '@components';
import { Content } from '@contents';
import { getContent } from '@utils';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
  params: {
    series: Content['series'][];
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const content = getContent({
    slug,
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: content.title,
    openGraph: {
      images: [content.coverSrc, ...previousImages],
    },
    description: content.description ?? '',
  };
}

export default function page({ params: { slug } }: PageProps) {
  const content = getContent({
    slug,
  });

  return <MDXContent {...content} />;
}
