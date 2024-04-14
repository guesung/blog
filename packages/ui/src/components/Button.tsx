import { cn } from '@guesung/utils';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
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
        'rounded-8',
        {
          'bg-black text-white': selected,
          'bg-white text-black border border-black': !selected,
        },
        sizeClassName[size]
      )}
    >
      {children}
    </button>
  );
}
