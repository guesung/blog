import { Layout } from '@components';
import { OUTER_ARTICLES_LIST } from '@constants';
import { formatShowDate } from '@guesung/utils';
import { Card, CardBody, Link } from '@nextui-org/react';
import { content } from '@utils';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: '학습한 내용과 지식들을 공유 및 정리합니다.',
};

export default function page() {
  const mdxContentList = content.getAllContents.map(
    ({ slug, series, ...rest }) => ({
      href: `series/${series}/${slug}`,
      ...rest,
    })
  );
  const allContentList = [...OUTER_ARTICLES_LIST, ...mdxContentList];

  // 날짜 순 정렬
  allContentList.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // 연도 추출
  const yearList = [
    ...new Set(
      allContentList.map(content => new Date(content.date).getFullYear())
    ),
  ];
  yearList.sort((a, b) => b - a);

  // 전체 글 수
  const contentCount = allContentList.length;

  return (
    <Layout>
      <Layout.Title>
        {metadata.title as string} ({contentCount})
      </Layout.Title>
      <Layout.Description>{metadata.description}</Layout.Description>
      <div className="flex flex-col gap-4">
        {yearList.map(year => (
          <div className="gap-12pxr flex" key={year}>
            <span className="flex items-center justify-center">{year}</span>
            <div className="flex flex-1 flex-col gap-4">
              {allContentList
                .filter(
                  content => new Date(content.date).getFullYear() === year
                )
                .map(({ date, href, title }) => (
                  <Card isHoverable isPressable as={Link} href={href}>
                    <CardBody className="flex-row justify-between">
                      <span>{title}</span>
                      <span className="gap-8pxr text-small text-default-400">
                        {formatShowDate(date)}
                      </span>
                    </CardBody>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
