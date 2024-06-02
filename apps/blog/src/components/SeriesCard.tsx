import { ComponentProps } from 'react';

import { formatDate } from '@guesung/utils';
import { Card } from '@guesung/ui';

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
    ? formatDate(lastModified)
    : '없음';

  return (
    <Card {...props}>
      <div className="flex gap-8">
        <span className="text-slate-700 dark:text-slate-200">
          {postCount}개의 포스트
        </span>
        <span>·</span>
        <span className="text-slate-500 dark:text-slate-400">
          마지막 업데이트 : {formattedLastModified}
        </span>
      </div>
    </Card>
  );
}
