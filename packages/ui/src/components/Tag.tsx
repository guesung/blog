import { ClassNameType, VariantEnum } from '@guesung/constants';
import { cn } from '@guesung/utils';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface TagProps extends ClassNameType, LinkProps {
  variant?: VariantEnum;
}

const tagVariantClassname: Record<VariantEnum, string> = {
  [VariantEnum.outline]: 'border-black rounded-12',
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
        'w-fit border-2 border-solid p-8',
        tagVariantClassname[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
