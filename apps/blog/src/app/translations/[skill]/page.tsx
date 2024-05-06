import { allTranslations } from '@contents';

interface pageProps {
  params: {
    skill: string;
  };
}
export default function page({ params: { skill } }: pageProps) {
  console.log(allTranslations);
  return <div>{skill}</div>;
}
