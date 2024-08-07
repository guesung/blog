import { PropsWithChildren } from 'react';
import { cn } from '@guesung/utils';

interface ContentLayoutProps {
  className?: string;
}

export default function ContentLayout({
  children,
  className,
}: PropsWithChildren<ContentLayoutProps>) {
  return (
    <div
      className={cn('max-w-800 mx-auto flex flex-col gap-10 px-16', className)}
    >
      {children}
    </div>
  );
}

interface TitleProps {}

function Title({ children }: PropsWithChildren<TitleProps>) {
  return <div className="my-20 text-center text-subtitle1">{children}</div>;
}

interface DescriptionProps {}

function Description({ children }: PropsWithChildren<DescriptionProps>) {
  return <div className="my-20 text-center text-body2">{children}</div>;
}

ContentLayout.Title = Title;
ContentLayout.Description = Description;
