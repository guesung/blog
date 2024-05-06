import { allPosts as allContents } from '@contents';
import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';

export const getAllContents = () =>
  allContents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

interface GetContent {
  slug: string;
}

export const getContent = ({ slug }: GetContent) => {
  const content = allContents.find(content => content.slug === slug);
  if (!content) return notFound();
  return content;
};

export const getContentSlugs = () =>
  allContents.map(content => content._raw.flattenedPath);
