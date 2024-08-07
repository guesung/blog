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
    <ContentLayout>
      <ContentLayout.Title>Library.</ContentLayout.Title>
      <ContentLayout.Description>나만의 작은 서재</ContentLayout.Description>
      {yearList.map(year => (
        <div className="flex" key={year}>
          <div className="flex items-center justify-center w-100">{year}</div>
          <div className="flex flex-col flex-1">
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
