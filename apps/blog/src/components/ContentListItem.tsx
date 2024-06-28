import { ComponentProps } from 'react';
import ListItem from './ListItem';
import { Content } from '@contents';
import { Tag } from '@guesung/ui';

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
    <ListItem {...props} className="flex-col">
      <div className="text-body2 flex gap-8 text-blue-500">
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
    </ListItem>
  );
}
