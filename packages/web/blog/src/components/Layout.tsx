import { PropsWithChildren } from 'react';
import { cn } from '@guesung/utils';
import { ClassNameType } from '@guesung/constants';

interface ContentLayoutProps extends ClassNameType {}

export default function Layout({
  children,
  className,
}: PropsWithChildren<ContentLayoutProps>) {
  return (
    <div className={cn('max-w-layout mx-auto flex flex-col px-16', className)}>
      {children}
    </div>
  );
}

//

interface TitleProps extends ClassNameType {}

function Title({ children, className }: PropsWithChildren<TitleProps>) {
  return <div className={cn('text-subtitle2', className)}>{children}</div>;
}

//

interface DescriptionProps extends ClassNameType {}

function Description({
  children,
  className,
}: PropsWithChildren<DescriptionProps>) {
  return (
    <div className={cn('text-body2 text-gray-3 my-20', className)}>
      {children}
    </div>
  );
}

//

Layout.Title = Title;
Layout.Description = Description;
