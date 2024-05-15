import { Card } from '@components';
import { matchingKorean } from '@constants';
import { getSeries } from '@utils';

export default function page() {
  const allSeries = getSeries();

  return (
    <div className="max-w-800 mx-auto text-center">
      <div className="text-title3 my-20">Series.</div>
      <div className="text-body2 my-20">
        시리즈로 작성된 포스트들을 모았습니다.
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-32">
        {allSeries.map(series => (
          <Card
            title={matchingKorean[series]}
            coverSrc={`/contents/${series}/cover.png`}
            href={`/series/${series}`}
          />
        ))}
      </div>
    </div>
  );
}
