import { Layout, ListItem } from '@components';
import { Library, LIBRARY_LIST } from '@constants';
import { Content } from '@contents';
import { formatDate } from '@guesung/utils';
import { getAllContents } from '@utils';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library.',
  description: '나만의 작은 서재',
};

const notShowSeries: Partial<Content['series']>[] = ['translations', 'etc'];

export default function page() {
  const allShowContents = getAllContents()
    .filter(content => !notShowSeries.includes(content.series))
    .map(({ slug, title, date, series }) => {
      return {
        href: `series/${series}/${slug}`,
        title,
        date: formatDate(date),
      };
    });

  const allLibraryList = [...LIBRARY_LIST, ...allShowContents];

  allLibraryList.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const yearList = Array.from(
    allLibraryList.reduce((yearSet: Set<number>, cur: Library) => {
      const year = new Date(cur.date).getFullYear();
      return yearSet.add(year);
    }, new Set())
  );

  return (
    <Layout>
      <Layout.Title>Library.</Layout.Title>
      <Layout.Description>나만의 작은 서재</Layout.Description>
      {yearList.map(year => (
        <div className="flex" key={year}>
          <div className="w-100 flex items-center justify-center">{year}</div>
          <div className="flex flex-1 flex-col">
            {allLibraryList
              .filter(library => new Date(library.date).getFullYear() === year)
              .map(library => (
                <ListItem {...library} className="flex-1" key={library.title}>
                  {library.date}
                </ListItem>
              ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
