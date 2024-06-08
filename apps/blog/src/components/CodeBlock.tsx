'use client';
import { PropsWithChildren } from 'react';
import CopyIcon from '@svgs/copy.svg';

export default function CodeBlock({ children }: PropsWithChildren) {
  return (
    <pre data-theme="one-dark-pro" className="relative">
      {children}
      <div className="absolute bottom-20 right-20">
        <CopyIcon className="h-20 w-20 cursor-pointer" />
      </div>
    </pre>
  );
}
