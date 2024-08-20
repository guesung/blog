'use client';
import ToolTip from '@components/ToolTip';
import { PropsWithChildren } from 'react';

interface DescriptionProps {
  content: string;
}

export default function Description({
  content,
  children,
}: PropsWithChildren<DescriptionProps>) {
  return (
    <ToolTip content={content}>
      <span className="px-8 py-4 cursor-pointer rounded-8pxr bg-yellow-50 dark:bg-slate-700">
        {children}
      </span>
    </ToolTip>
  );
}
