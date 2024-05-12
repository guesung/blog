import { Content, DocumentTypes, allContents } from '@contents';
import { compareDesc } from 'date-fns';

export const sortContentByDate = (contents: DocumentTypes[]) =>
  contents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

interface GetContentProps {
  series: string;
}

export const getContents = ({ series }: GetContentProps): Content[] =>
  sortContentByDate(allContents.filter(content => content.series === series));

interface GetContentBySlugProps extends GetContentProps {
  slug?: string;
}

export const getContent = ({
  series,
  slug,
}: GetContentBySlugProps): Content => {
  const content = getContents({ series }).find(
    content => content.slug === slug
  );
  if (!content) throw new Error(`Content not found for slug: ${slug}`);
  return content;
};
