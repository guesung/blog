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
        <span className="rounded-16 text-caption absolute -top-32 left-8 w-max bg-slate-50 px-8 py-4 text-black dark:bg-slate-700">
          {content}
        </span>
      )}
      {children}
    </span>
  );
}
