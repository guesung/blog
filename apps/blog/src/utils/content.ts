import { Content, DocumentTypes, allContents } from '@contents';
import { compareDesc } from 'date-fns';

//

export const sortContentByDate = (contents: DocumentTypes[]) =>
  contents.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

//

const allContentsPublished = allContents.filter(content => content.isPublished);

interface GetContentProps {
  series?: Content['series'];
}

export const getContents = ({ series }: GetContentProps = {}): Content[] =>
  series
    ? sortContentByDate(
        allContentsPublished.filter(content => content.series === series)
      )
    : sortContentByDate(allContentsPublished);

//

export const getSeries = () =>
  Array.from(
    new Set(allContentsPublished.map(content => content.series))
  ).filter(series => series);

//

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

//

interface GetSeriesCountProps  {
  series: Content['series'];
}

export const getSeriesCount = ({series}: GetSeriesCountProps) =>
  getContents({series}).length;

//

interface GetSeriesLastModifiedProps{
  series: Content['series'];
}

export const getSeriesLastModified = ({series}:GetSeriesLastModifiedProps) =>{
  const contents = getContents({series});
  return contents[contents.length - 1]?.lastModified ?? '';
}

//

export const getAllTag = () =>
  Array.from(new Set(allContentsPublished.flatMap(content => content.tags)));

//

export const getContentsByTag = (tag: string) =>
  getContents().filter(content => content.tags?.includes(tag));