import { cn } from '@guesung/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return <input className={cn('bg-white-1 px-4 py-8', className)} {...props} />;
}
