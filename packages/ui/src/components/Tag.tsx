import { ClassnNameType, VariantEnum } from '@guesung/constants';
import { cn } from '@guesung/utils';
import { PropsWithChildren } from 'react';

interface TagProps extends React.HTMLProps<HTMLDivElement>, ClassnNameType {
  variant?: VariantEnum;
}

const tagVariantClassname: Record<VariantEnum, string> = {
  [VariantEnum.outline]: 'border-solid border-2 border-black rounded-12',
  [VariantEnum.filled]: 'bg-black text-white',
};

export default function Tag({
  variant = VariantEnum.outline,
  className,
  children,
}: PropsWithChildren<TagProps>) {
  return (
    <div
      className={cn('w-fit px-8 py-4', tagVariantClassname[variant], className)}
    >
      {children}
    </div>
  );
}
