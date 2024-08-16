'use client';

import { cn } from '@guesung/utils';
import { useScroll } from '@hooks';
import { PropsWithChildren, useState } from 'react';

interface HeaderWrapperProps {}

export default function HeaderWrapper({
  children,
}: PropsWithChildren<HeaderWrapperProps>) {
  const [isChildrenShow, setIsChildrenShow] = useState(true);
  const { scrollY: prevScrollY } = useScroll({
    callbackFn: () => {
      const currentScrollY = window.scrollY;
      setIsChildrenShow(prevScrollY > currentScrollY);
    },
  });

  return (
    <div
      className={cn(
        'text-body2 max-w-layout border-b-1 fixed inset-x-0 top-0 z-10 mx-auto transform px-20 py-4 shadow-sm transition-transform duration-300 ease-in-out',
        { '-translate-y-full': !isChildrenShow }
      )}
    >
      {children}
    </div>
  );
}
