'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '@guesung/utils';
import { useScroll } from '@hooks';

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.prevScrollY;
  //     setIsChildrenShow(prevScrollY > currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollY]);

  return (
    <header
      className={cn(
        'className="text-body2 dark:bg-black" fixed top-0 z-10 mx-auto flex w-screen transform items-center justify-between bg-white px-20 py-16 shadow-sm transition-transform duration-300 ease-in-out',
        { '-translate-y-full': !isChildrenShow }
      )}
    >
      {children}
    </header>
  );
}
