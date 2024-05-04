import { VariantEnum } from '@guesung/constants';
import { cn } from '@guesung/utils';
import { PropsWithChildren } from 'react';

interface TagProps {
  variant?: VariantEnum;
}

const tagVariantClassname: Record<VariantEnum, string> = {
  [VariantEnum.outline]: 'border-solid border-2 border-black rounded-12',
  [VariantEnum.filled]: 'bg-black text-white',
};

export default function Tag({
  variant = VariantEnum.outline,
  children,
}: PropsWithChildren<TagProps>) {
  return (
    <div className={cn('px-4 py-8', tagVariantClassname[variant])}>
      {children}
    </div>
  );
}
