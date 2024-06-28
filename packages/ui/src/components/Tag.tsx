import { ClassNameType, VariantEnum } from '@guesung/constants';
import { cn } from '@guesung/utils';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface TagProps extends ClassNameType, LinkProps {
  variant?: VariantEnum;
}

const tagVariantClassname: Record<VariantEnum, string> = {
  [VariantEnum.outline]: 'border-black rounded-20',
  [VariantEnum.filled]: 'bg-black text-white border-white',
};

export default function Tag({
  variant = VariantEnum.outline,
  className,
  children,
  ...props
}: PropsWithChildren<TagProps>) {
  return (
    <Link
      className={cn(
        'text-caption border-1 w-fit border-solid px-8 py-4 hover:bg-slate-600 hover:text-white',
        tagVariantClassname[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
