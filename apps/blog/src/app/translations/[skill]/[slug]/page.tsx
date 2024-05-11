import { allTranslations } from '@contents';
import { PostContent, PostTitle } from './components';
import { notFound } from 'next/navigation';

interface pageProps {
  params: {
    skill: string;
    slug: string;
  };
}
export default function page({ params: { skill, slug } }: pageProps) {
  const translation = allTranslations.find(
    translation => translation.skill === skill && translation.slug === slug
  );
  if (!translation) return notFound();

  return (
    <div className="max-w-1200 mx-auto px-20">
      <PostTitle title={slug} date={translation.date} />
      <PostContent body={translation.body} />
    </div>
  );
}
