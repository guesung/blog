import { ComponentProps } from 'react';

import { formatShowDate } from '@guesung/utils';
import { Card, Move } from '@guesung/ui';

interface SeriesCardProps extends ComponentProps<typeof Card> {
  postCount: number;
  lastModified?: string;
}

export default function SeriesCard({
  postCount,
  lastModified,
  ...props
}: SeriesCardProps) {
  const formattedLastModified = lastModified
    ? formatShowDate(lastModified)
    : '없음';

  return (
    <Move>
      <Card {...props}>
        <div className="flex gap-8pxr">
          <span className="white-1 text-white-1">{postCount}개의 포스트</span>
          <span>·</span>
          <span className="shite-2 text-white-2">
            마지막 업데이트 : {formattedLastModified}
          </span>
        </div>
      </Card>
    </Move>
  );
}
