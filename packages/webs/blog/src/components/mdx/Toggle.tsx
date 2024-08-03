'use client';

import { cn } from '@guesung/utils';
import { PropsWithChildren, ReactNode, useState } from 'react';

interface ToggleProps {
  text?: string;
  className?: string;
  title?: ReactNode;
}

export default function Toggle({
  children,
  className,
  title,
  text,
}: PropsWithChildren<ToggleProps>) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => setIsToggle(!isToggle);

  return (
    <>
      <span onClick={handleToggle} className="cursor-pointer">
        {title} {isToggle ? <span>▼</span> : <span>▶</span>}
      </span>
      <div className={cn(className)}>{isToggle && children}</div>
    </>
  );
}
