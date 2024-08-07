import { SeriesCard, Layout } from '@components';
import { matchingKorean } from '@constants';
import { CardList } from '@guesung/ui';
import { getSeries, getSeriesCount, getSeriesLastModified } from '@utils';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Series.',
  description: '시리즈로 작성된 포스트들을 모았습니다.',
};

export default function page() {
  const allSeries = getSeries();
  const allSeriesExceptEtc = allSeries.filter(series => series !== 'etc');

  return (
    <Layout>
      <Layout.Title>Series.</Layout.Title>
      <Layout.Description>
        시리즈로 작성된 포스트들을 모았습니다.
      </Layout.Description>
      <CardList
        items={allSeriesExceptEtc}
        render={series => (
          <SeriesCard
            title={matchingKorean[series] ?? series}
            coverSrc={`/contents/${series}/cover.png`}
            href={`/series/${series}`}
            postCount={getSeriesCount({ series })}
            lastModified={getSeriesLastModified({ series })}
          />
        )}
      />
    </Layout>
  );
}
