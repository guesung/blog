import { ClassNameType } from '@guesung/constants';
import { cn } from '@guesung/utils';

interface CircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ClassNameType {
  size?: 'small' | 'medium' | 'large';
}

const Sizes = {
  small: 'w-100 h-100',
  medium: 'w-200 h-200',
  large: 'w-300 h-300',
};

export default function Circle({
  className,
  size = 'small',
  ...props
}: CircleProps) {
  return (
    <div
      {...props}
      className={cn(Sizes[size], 'rounded-full bg-slate-300', className)}
    />
  );
}
