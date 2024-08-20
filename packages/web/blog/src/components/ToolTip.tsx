import { PropsWithChildren, useState } from 'react';

interface ToolTipProps {
  content: string;
}

export default function ToolTip({
  content,
  children,
}: PropsWithChildren<ToolTipProps>) {
  const [isShowToolTip, setIsShowToolTip] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsShowToolTip(true)}
      onMouseLeave={() => setIsShowToolTip(false)}
      className="relative"
    >
      {isShowToolTip && (
        <span className="absolute text-black rounded-16pxr text-caption -top-32pxr left-8pxr w-max bg-slate-50 px-8pxr py-4pxr dark:bg-slate-700">
          {content}
        </span>
      )}
      {children}
    </span>
  );
}
