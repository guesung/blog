import { ContentLayout, ListItem } from '@components';
import { ComponentProps } from 'react';

interface Library extends ComponentProps<typeof ListItem> {
  date: string;
}

const libraryList: Library[] = [
  {
    title: '2023년을 돌아보며',
    href: 'https://www.notion.so/guesung/2023-7e44ffe7fe99443dbcff3c461e4106e7?pvs=4',
    date: '2023-12-30',
    target: '_blank',
  },
  {
    title: 'Gloddy 초기 스타트업 중간 회고',
    href: 'https://note.guesung.site/daa59990-1318-412d-9ce2-7a4fe1d50bb9',
    date: '2023-11-01',
    target: '_blank',
  },
  {
    title: '[개발 회고록] 나의 2022년 개발 성장기',
    href: 'https://peter-coding.tistory.com/272',
    date: '2023-01-01',
    target: '_blank',
  },
];
const yearList = libraryList.reduce((acc: number[], cur: Library) => {
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
            {libraryList
              .filter(library => new Date(library.date).getFullYear() === year)
              .map(library => (
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
