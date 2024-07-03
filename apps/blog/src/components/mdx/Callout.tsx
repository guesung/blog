'use client';

import { cn } from '@guesung/utils';
import { PropsWithChildren, useState } from 'react';
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
  type = 'info',
  title,
  children,
}: PropsWithChildren<CalloutProps>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        {
          'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-800':
            type === 'info',
          'border-blue-500 bg-blue-100 text-blue-900 dark:bg-blue-950':
            type === 'plus',
          'border-pink-500 bg-pink-100 text-pink-900 dark:bg-pink-950':
            type === 'minus',
        },
        'rounded-16 my-16 px-16 py-12'
      )}
    >
      <div
        className="flex cursor-pointer items-center gap-8"
        onClick={toggleOpen}
      >
        {icons[type]}
        <span className="text-body2 font-bold">{title}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
