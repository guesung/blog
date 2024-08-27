'use client';

import { useScroll } from '@hooks';
import { Progress } from '@nextui-org/react';

export default function ProgressClient() {
  const { scrollYPercentage } = useScroll();

  return (
    <Progress
      value={scrollYPercentage}
      className="fixed inset-x-0 top-0 z-50"
      size="sm"
    />
  );
}
