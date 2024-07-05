'use client';

import { cn } from '@guesung/utils';
import { PropsWithChildren, useRef, useState } from 'react';
import PlusIcon from '@svgs/plus.svg';
import MinusIcon from '@svgs/minus.svg';
import BulbIcon from '@svgs/bulb.svg';
import PointerDownIcon from '@svgs/pointer_down.svg';
import PointerUpIcon from '@svgs/pointer_up.svg';

interface CalloutProps {
  type: 'info' | 'plus' | 'minus';
  title: string;
  initialOpen?: boolean;
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
  initialOpen = false,
}: PropsWithChildren<CalloutProps>) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCalloutClick = () => {
    const calloutScroll = ref.current?.getBoundingClientRect().top;
    if (!calloutScroll) return;

    if (isOpen) {
      window.scrollTo({
        top: calloutScroll + window.scrollY - 64,
        behavior: 'smooth',
      });
    }

    toggleOpen();
  };

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
        'rounded-16 my-16 cursor-pointer px-16 py-12'
      )}
      onClick={handleCalloutClick}
      ref={ref}
    >
      <div
        className="flex  items-center justify-between gap-8"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          {icons[type]}
          <span className="text-body2 font-bold">{title}</span>
        </div>
        {isOpen ? <PointerDownIcon width="32" /> : <PointerUpIcon width="32" />}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
