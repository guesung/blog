import { DocumentTypes } from '@contents';
import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';

export const sortContentByDate = (contents: DocumentTypes[]) =>
  contents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export const getContent = (contents: DocumentTypes[], slug: string) => {
  const content = contents.find(content => content.slug === slug);
  if (!content) return notFound();
  return content;
};
