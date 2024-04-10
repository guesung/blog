import Link from 'next/link';

export interface CardProps {
  href?: string;
  children: React.ReactNode;
}

export default function Card({ href, children }: CardProps) {
  return (
    <article>
      <Link href={href ?? ''}>{children}</Link>
    </article>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
}

function CardHeader({ children }: CardHeaderProps) {
  return <div className="h-300 w-400 relative">{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
}

function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
