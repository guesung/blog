import { Layout } from '@components';
import { matchingKorean } from '@constants';
import { Content } from '@contents';
import { Tag } from '@guesung/ui';
import { Card } from '@nextui-org/react';
import { getAllContents } from '@utils';

interface pageProps {
  params: {
    series: Content['series'];
  };
}

export default function page({ params: { series } }: pageProps) {
  return (
    <Layout>
      <Layout.Title>{matchingKorean[series]}</Layout.Title>
      <Layout.Description>
        {matchingKorean[series]} 시리즈입니다
      </Layout.Description>
      {getAllContents().map(({ tags, description, date }) => (
        <Card>
          <div className="flex text-blue-500 text-body2 gap-8pxr">
            {tags &&
              tags.map(tag => (
                <Tag href={`/tags/${tag}`} key={tag}>
                  {tag}
                </Tag>
              ))}
          </div>
          <div className="text-body2">{description}</div>
          <div className="text-body2">
            {new Date(date).getFullYear()}년 {new Date(date).getMonth() + 1}월{' '}
            {new Date(date).getDate()}일
          </div>
        </Card>
      ))}
    </Layout>
  );
}
