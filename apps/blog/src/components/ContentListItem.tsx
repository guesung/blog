import { ComponentProps } from 'react';
import ListItem from './ListItem';
import { Content } from '@contents';

interface ContentListItemProps
  extends Omit<ComponentProps<typeof ListItem>, 'coverSrc' | 'type'>,
    Content {}
export default function ContentListItem({
  tags,
  description,
  date,
  ...props
}: ContentListItemProps) {
  return (
    <ListItem {...props}>
      <div className="text-body3 flex gap-8 text-blue-500">
        {tags && tags.map(tag => <div key={tag}>{tag}</div>)}
      </div>
      <div className="text-body3">{description}</div>
      <div className="text-body3">
        {new Date(date).getFullYear()}년 {new Date(date).getMonth() + 1}월{' '}
        {new Date(date).getDate()}일
      </div>
    </ListItem>
  );
}
