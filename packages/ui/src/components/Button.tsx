import { cn } from '@guesung/utils';
import { PropsWithChildren } from 'react';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  size?: 'small' | 'medium' | 'large';
  selected?: boolean;
}

const sizeClassName = {
  small: 'py-2 px-4',
  medium: 'py-4 px-8',
  large: 'py-6 px-12',
};

export default function Button({
  children,
  size = 'medium',
  selected = false,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-8 w-fit',
        {
          'bg-black text-white': selected,
          'border border-black bg-white text-black': !selected,
        },
        sizeClassName[size]
      )}
    >
      {children}
    </button>
  );
}
