import { PropsWithChildren } from 'react';
import { cn } from '@guesung/utils';
import { ClassNameType } from '@guesung/constants';

interface ContentLayoutProps extends ClassNameType {}

export default function ContentLayout({
  children,
  className,
}: PropsWithChildren<ContentLayoutProps>) {
  return (
    <div className={cn('max-w-800 mx-auto flex flex-col px-16', className)}>
      {children}
    </div>
  );
}

interface TitleProps extends ClassNameType {}

function Title({ children, className }: PropsWithChildren<TitleProps>) {
  return (
    <div className={cn('text-subtitle2 my-20 text-center', className)}>
      {children}
    </div>
  );
}

interface DescriptionProps extends ClassNameType {}

function Description({
  children,
  className,
}: PropsWithChildren<DescriptionProps>) {
  return (
    <div className={cn('text-body2 my-20 text-center', className)}>
      {children}
    </div>
  );
}

ContentLayout.Title = Title;
ContentLayout.Description = Description;