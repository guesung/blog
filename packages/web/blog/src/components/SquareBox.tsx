import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';
import React, { PropsWithChildren } from 'react';

interface SquareBoxProps extends ClassNameType {}

export default function SquareBox({
  children,
  className,
}: PropsWithChildren<SquareBoxProps>) {
  return (
    <div className={cn('border-1 rounded-8pxr px-24pxr py-12pxr', className)}>
      {children}
    </div>
  );
}
