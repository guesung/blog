import { cn } from '@guesung/utils';
import { PropsWithChildren } from 'react';
import PlusIcon from '@svgs/plus.svg';
import MinusIcon from '@svgs/minus.svg';
import BulbIcon from '@svgs/bulb.svg';

interface CalloutProps {
  type: 'info' | 'plus' | 'minus';
  title: string;
}

const icons = {
  info: <BulbIcon className="h-24 w-24" />,
  plus: <PlusIcon className="h-16 w-16" />,
  minus: <MinusIcon className="h-16 w-16" />,
};

export default function Callout({
  type,
  title,
  children,
}: PropsWithChildren<CalloutProps>) {
  return (
    <div
      className={cn(
        {
          'border-yellow-500 bg-yellow-100 text-yellow-900': type === 'info',
          'border-blue-500 bg-blue-100 text-blue-900': type === 'plus',
          'border-pink-500 bg-pink-100 text-pink-900': type === 'minus',
        },
        'rounded-16 my-16 px-16 py-12'
      )}
    >
      <div className="flex items-center gap-8">
        {icons[type]}
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
