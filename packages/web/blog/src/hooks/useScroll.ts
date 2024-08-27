'use client';

import { useEffect, useState } from 'react';

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [totalY, setTotalY] = useState(0);
  const [scrollYPercentage, setScrollYPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalY = document.documentElement.scrollHeight - window.innerHeight;
      setTotalY(totalY);
      setScrollYPercentage((scrollY / totalY) * 100);
    };
    // 100ms 마다 스크롤 위치 갱신
    const interaval = setInterval(handleScroll, 100);
    return () => {
      clearInterval(interaval);
    };
  }, [scrollY]);

  return {
    scrollY,
    totalY,
    scrollYPercentage,
  };
}
