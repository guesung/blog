'use client';
import { PropsWithChildren, useRef } from 'react';
import CopyIcon from '@svgs/copy.svg';
import { copyToClipboard } from '@guesung/utils';

export default function CodeBlock({ children }: PropsWithChildren) {
  const ref = useRef<HTMLPreElement>(null);
  const handleCopyClick = async () => {
    const text = ref.current?.querySelector('code')?.innerText ?? '';
    await copyToClipboard(text);
  };

  return (
    <pre data-theme="one-dark-pro" className="relative" ref={ref}>
      {children}
      <div className="absolute bottom-20 right-20">
        <CopyIcon
          className="h-20 w-20 cursor-pointer"
          onClick={handleCopyClick}
        />
      </div>
    </pre>
  );
}
