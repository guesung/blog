import { Card, CardList, ContentLayout } from '@components';
import { matchingKorean } from '@constants';
import { getSeries } from '@utils';

export default function page() {
  const allSeries = getSeries();
  const allSeriesExceptEtc = allSeries.filter(series => series !== 'etc');

  return (
    <ContentLayout>
      <div className="text-title3 my-20">Series.</div>
      <div className="text-body2 my-20">
        시리즈로 작성된 포스트들을 모았습니다.
      </div>
      <CardList
        items={allSeriesExceptEtc}
        render={items => (
          <Card
            title={matchingKorean[items]}
            coverSrc={`/contents/${items}/cover.png`}
            href={`/series/${items}`}
          />
        )}
      />
    </ContentLayout>
  );
}
