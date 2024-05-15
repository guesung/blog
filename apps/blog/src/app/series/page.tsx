import { Card, CardList, ContentLayout } from '@components';
import { matchingKorean } from '@constants';
import { getSeries } from '@utils';

export default function page() {
  const allSeries = getSeries();
  const allSeriesExceptEtc = allSeries.filter(series => series !== 'etc');

  return (
    <ContentLayout>
      <ContentLayout.Title>Series.</ContentLayout.Title>
      <ContentLayout.Description>
        시리즈로 작성된 포스트들을 모았습니다.
      </ContentLayout.Description>
      <CardList
        items={allSeriesExceptEtc}
        render={series => (
          <Card
            title={matchingKorean[series]}
            coverSrc={`/contents/${series}/cover.png`}
            href={`/series/${series}`}
          />
        )}
      />
    </ContentLayout>
  );
}