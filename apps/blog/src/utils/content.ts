import { Content, DocumentTypes, allContents } from '@contents';
import { compareDesc } from 'date-fns';

//

export const sortContentByDate = (contents: DocumentTypes[]) =>
  contents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

//

const allContentsPublished = allContents.filter(content => content.isPublished);



export const getAllContents = (): Content[] =>
  sortContentByDate(allContentsPublished);

export const getSeries = () =>
  Array.from(
    new Set(allContentsPublished.map(content => content.series))
  ).filter(series => series);

//

interface GetContentBySlugProps {
  slug?: string;
}

export const getContent = ({ slug }: GetContentBySlugProps): Content => {
  const content = getAllContents().find(content => content.slug === slug);
  if (!content) throw new Error(`Content not found for slug: ${slug}`);
  return content;
};

//

interface GetSeriesCountProps {
  series: string;
}

export const getSeriesCount = ({ series }: GetSeriesCountProps) =>
  getAllContents().filter(content => content.series === series).length;

//

interface GetSeriesLastModifiedProps {
  series: string;
}

export const getSeriesLastModified = ({
  series,
}: GetSeriesLastModifiedProps) => {
  const contents = getAllContents().filter(
    content => content.series === series
  );
  return contents[contents.length - 1]?.lastModified ?? '';
};

//

export const getAllTag = () =>
  Array.from(new Set(allContentsPublished.flatMap(content => content.tags)));

//

export const getContentsByTag = (tag: string) =>
  getAllContents().filter(content => content.tags?.includes(tag));
