import { ContentLayout, ListItem } from '@components';
import { Library, LIBRARY_LIST } from '@constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library.',
  description: '나만의 작은 서재',
};

const yearList = LIBRARY_LIST.reduce((acc: number[], cur: Library) => {
  const year = new Date(cur.date).getFullYear();
  if (!acc.includes(year)) acc.push(year);
  return acc;
}, []);

export default function page() {
  return (
    <ContentLayout className="max-w-1000">
      <ContentLayout.Title>Library.</ContentLayout.Title>
      <ContentLayout.Description>나만의 작은 서재</ContentLayout.Description>
      {yearList.map(year => (
        <div className="flex" key={year}>
          <div className="w-100 flex items-center justify-center">{year}</div>
          <div className="flex flex-1 flex-col">
            {LIBRARY_LIST.filter(
              library => new Date(library.date).getFullYear() === year
            ).map(library => (
              <ListItem {...library} className="flex-1" key={library.title}>
                {library.date}
              </ListItem>
            ))}
          </div>
        </div>
      ))}
    </ContentLayout>
  );
}
