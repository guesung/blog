interface PostTitleProps {
  title: string;
  date: string;
}
export default function PostTitle({ title, date }: PostTitleProps) {
  return <div>{title}</div>;
}
