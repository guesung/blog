import { Layout } from '@components';
import { matchingKorean } from '@constants';
import { DocumentTypes } from '@contents';
import { Card, Link } from '@nextui-org/react';
import { content } from '@utils';
import { Chip } from '@nextui-org/react';

interface pageProps {
  params: {
    series: DocumentTypes['series'];
  };
}

export default function page({ params: { series } }: pageProps) {
  const contents = content.getAllContents;
  return (
    <Layout>
      <Layout.Title>{matchingKorean[series]}</Layout.Title>
      <Layout.Description>
        {matchingKorean[series]} 시리즈입니다
      </Layout.Description>
      {contents.map(({ tags, description, date }) => (
        <Card>
          <div className="text-body2 gap-8pxr flex text-blue-500">
            {tags &&
              tags.map(tag => (
                <Chip as={Link} href={`/tags/${tag}`} key={tag}>
                  {tag}
                </Chip>
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
