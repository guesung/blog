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
      <span className="bg-yellow-50 px-8 py-4">{children}</span>
    </ToolTip>
  );
}
