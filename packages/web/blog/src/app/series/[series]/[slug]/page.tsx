import { MDXContent } from '@components';
import { DocumentTypes } from '@contents';
import { content } from '@utils';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
  params: {
    series: DocumentTypes['series'][];
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const contents = content.getContentBySlug(slug);

  if (!contents) {
    throw new Error(`Content not found: ${slug}`);
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: contents.title,
    openGraph: {
      images: [contents.coverSrc, ...previousImages],
    },
    description: contents.description ?? '',
  };
}

export default function page({ params: { slug } }: PageProps) {
  const contents = content.getContentBySlug(slug);

  if (!contents) return null;

  return <MDXContent {...contents} />;
}
