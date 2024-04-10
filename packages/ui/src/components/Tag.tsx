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
    <div className={cn('py-8 px-4', tagVariantClassname[variant])}>
      {children}
    </div>
  );
}
