interface PostTitleProps {
  title: string;
  date: string;
}
export default function PostTitle({ title, date }: PostTitleProps) {
  return <div className="text-title1 my-50 text-center">{title}</div>;
}
