import { ContentLayout, ListItem } from '@components';
import { Metadata } from 'next';
import { ComponentProps } from 'react';

interface Library extends ComponentProps<typeof ListItem> {
  date: string;
}

export const metadata: Metadata = {
  title: 'Library.',
  description: '나만의 작은 서재',
};
 

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
    title: 'React 번역 도전기 (feat. 오픈소스 기여한 썰)',
    href: 'https://peter-coding.tistory.com/355',
    date: '2023-06-06',
    target: '_blank',
  },
  {
    title: '[독후감] 소프트웨어 장인',
    href: 'https://peter-coding.tistory.com/360',
    date: '2023-05-23',
    target: '_blank',
  },
  {
    title: '사이드 프로젝트 개발팀을 굴려보자',
    href: 'https://peter-coding.tistory.com/287',
    date: '2023-02-17',
    target: '_blank',
  },
  {
    title: '[Javascript 코딩테스트 스터디 회고] 스터디를 굴려보자',
    href: 'https://peter-coding.tistory.com/277',
    date: '2023-01-15',
    target: '_blank',
  },
  {
    title: '[스터디 후기] 1일 1커밋 스터디를 1달간 운영하며 ..',
    href: 'https://peter-coding.tistory.com/276',
    date: '2023-01-09',
    target: '_blank',
  },
  {
    title: '[개발 회고록] 나의 2022년 개발 성장기',
    href: 'https://peter-coding.tistory.com/272',
    date: '2023-01-01',
    target: '_blank',
  },
  {
    title: '[구름톤 4기 후기] 3박 4일간의 여정',
    href: 'https://peter-coding.tistory.com/271',
    date: '2022-12-23',
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
