'use client';
import { useScroll } from '@hooks';
import { useState } from 'react';

export default function PostStatusBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useScroll({
    callbackFn: () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollY / totalHeight) * 100;
      setScrollPercentage(scrollPercentage);
    },
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-10 h-5 bg-yellow-100"
      style={{
        width: `${scrollPercentage}%`,
      }}
    />
  );
}
