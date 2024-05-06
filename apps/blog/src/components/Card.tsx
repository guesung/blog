import Link, { LinkProps } from 'next/link';

interface CardProps extends LinkProps {
  title: string;
  date: string;
}

export default function Card({ title, date, ...props }: CardProps) {
  return (
    <Link {...props}>
      <div className="h-300 w-400 rounded-16 relative my-10 bg-slate-100">
        <div className="text-subtitle2 p-20 leading-[1.2]">{title}</div>
        <span className="absolute bottom-12 right-12">{date}</span>
      </div>
    </Link>
  );
}
