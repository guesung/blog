import { cn } from '@guesung/utils';
import { ForwardedRef, forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default forwardRef(function Input(
  { className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      className={cn('bg-white-1 px-4 py-8', className)}
      {...props}
    />
  );
});
