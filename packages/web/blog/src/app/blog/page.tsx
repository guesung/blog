import { Layout, ListItem } from '@components';
import { Article, OUTER_ARTICLES_LIST } from '@constants';
import { Content } from '@contents';
import { formatDate } from '@guesung/utils';
import { getAllContents } from '@utils';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: '학습한 내용과 지식들을 공유 및 정리합니다.',
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

  const allContentList = [...OUTER_ARTICLES_LIST, ...allShowContents];

  allContentList.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const yearList = Array.from(
    allContentList.reduce((yearSet: Set<number>, cur: Article) => {
      const year = new Date(cur.date).getFullYear();
      return yearSet.add(year);
    }, new Set())
  );

  const contentCount = allContentList.length;

  return (
    <Layout>
      <Layout.Title>
        {metadata.title as ''} ({contentCount})
      </Layout.Title>
      <Layout.Description>{metadata.description}</Layout.Description>
      {yearList.map(year => (
        <div className="flex" key={year}>
          <div className="flex items-center justify-center w-100">{year}</div>
          <div className="flex flex-col flex-1">
            {allContentList
              .filter(content => new Date(content.date).getFullYear() === year)
              .map(content => (
                <ListItem {...content} className="flex-1" key={content.title}>
                  {content.date}
                </ListItem>
              ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
