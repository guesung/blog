'use client';
import { useEffect, useState } from 'react';

interface UseScrollProps {
  callbackFn?: () => void;
}

export default function useScroll({ callbackFn }: UseScrollProps = {}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      callbackFn?.();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return {
    scrollY,
  };
}