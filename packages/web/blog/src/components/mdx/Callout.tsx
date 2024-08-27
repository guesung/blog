'use client';

import { cn } from '@guesung/utils';
import { PropsWithChildren, useRef, useState } from 'react';
import PlusIcon from '#images/icons/plus.svg';
import MinusIcon from '#images/icons/minus.svg';
import BulbIcon from '#images/icons/bulb.svg';
import PointerDownIcon from '#images/icons/pointer_down.svg';
import PointerUpIcon from '#images/icons/pointer_up.svg';

type CalloutType = 'info' | 'plus' | 'minus';

interface CalloutProps {
  type: CalloutType;
  title: string;
  initialOpen?: boolean;
}

const iconMap = {
  info: <BulbIcon className="h-24pxr w-24pxr" />,
  plus: <PlusIcon className="h-16pxr w-16pxr" />,
  minus: <MinusIcon className="h-16pxr w-16pxr" />,
};

const styleMap = {
  info: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-800',
  plus: 'border-blue-500 bg-blue-100 text-blue-900 dark:bg-blue-950',
  minus: 'border-pink-500 bg-pink-100 text-pink-900 dark:bg-pink-950',
};

export default function Callout({
  type = 'info',
  title,
  children,
  initialOpen = true,
}: PropsWithChildren<CalloutProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(prev => !prev);

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
        'rounded-16 px-16pxr py-12pxr my-16pxr rounded-lg',
        styleMap[type]
      )}
      ref={ref}
    >
      <div
        className="gap-8pxr flex cursor-pointer items-center justify-between"
        onClick={handleCalloutClick}
      >
        <div className="flex items-center">
          {iconMap[type]}
          <span className="text-body2 font-bold">{title}</span>
        </div>
        {isOpen ? <PointerDownIcon width="32" /> : <PointerUpIcon width="32" />}
      </div>
      <div className={cn({ hidden: !isOpen })}>{children}</div>
    </div>
  );
}
