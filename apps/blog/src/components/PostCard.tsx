import Link from 'next/link';

interface PostCardProps {
  id: string;
  title: string;
  date: string;
  url: string;
}

export default function PostCard({ id, title, date, url }: PostCardProps) {
  console.log(title, date, id);
  return (
    <Link href={url}>
      <div className="h-300 w-400 rounded-16 relative my-10 bg-slate-500">
        <span className="absolute bottom-12 right-12">{date}</span>
      </div>
    </Link>
  );
}
