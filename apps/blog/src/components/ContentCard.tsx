import { ComponentProps } from 'react';
import Card from './Card';
import { date } from '@guesung/utils';

interface ContentCardProps extends ComponentProps<typeof Card> {
  postCount: number;
  lastModified?: string;
}

export default function ContentCard({
  postCount,
  lastModified,
  ...props
}: ContentCardProps) {
  const formattedLastModified = lastModified
    ? `${date(lastModified).year}년 ${date(lastModified).month}월 ${
        date(lastModified).date
      }일`
    : '없음';

  return (
    <Card {...props}>
      <div className="flex gap-8">
        <span className="text-slate-700">{postCount}개의 포스트</span>
        <span>·</span>
        <span className="text-slate-500">
          마지막 업데이트 : {formattedLastModified}
        </span>
      </div>
    </Card>
  );
}
