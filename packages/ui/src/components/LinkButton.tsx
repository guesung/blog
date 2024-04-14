import Link from 'next/link';
import Button, { ButtonProps } from './Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
