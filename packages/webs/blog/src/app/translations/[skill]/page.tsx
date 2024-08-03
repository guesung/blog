interface pageProps {
  params: {
    skill: string;
  };
}
export default function page({ params: { skill } }: pageProps) {
  return <div>{skill}</div>;
}
