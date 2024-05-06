import Link from 'next/link';

interface PostCardProps {
  title: string;
  date: string;
  url: string;
}

export default function PostCard({ title, date, slug }: PostCardProps) {
  return (
    <Link href={`posts/${slug}`}>
      <div className="h-300 w-400 rounded-16 relative my-10 bg-slate-100">
        <div className="text-subtitle2 p-20 leading-[1.2]">{title}</div>
        <span className="absolute bottom-12 right-12">{date}</span>
      </div>
    </Link>
  );
}
