import { cn } from '@guesung/utils';
import { PropsWithChildren } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
        'rounded-8pxr w-fit',
        {
          'bg-black-1 text-white-1': selected,
          'bg-white-1 text-black-1 border-black-1 border': !selected,
        },
        sizeClassName[size]
      )}
    >
      {children}
    </button>
  );
}
