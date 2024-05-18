'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '@guesung/utils';

interface HeaderWrapperProps {}

export default function HeaderWrapper({
  children,
}: PropsWithChildren<HeaderWrapperProps>) {
  const [isChildrenShow, setIsChildrenShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsChildrenShow(prevScrollY > currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={cn(
        'className="text-body2 dark:bg-black" fixed top-0 z-10 mx-auto flex w-screen items-center justify-between bg-white px-20 py-16 shadow-sm',
        { '-translate-y-full': !isChildrenShow }
      )}
    >
      {children}
    </header>
  );
}
