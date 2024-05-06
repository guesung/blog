import { Card, CardList } from '@components';
import { Post, Translation, allPosts, allTranslations } from '@contents';

export default function Page() {
  return (
    <div className="max-w-1000 mx-auto text-center">
      <div className="text-title1 my-20">ALL POSTS.</div>
      <CardList<Post>
        items={allPosts}
        render={post => (
          <Card
            key={post._id}
            href={`posts/${post.slug}`}
            title={post.title}
            date={post.date}
          />
        )}
      />

      <div className="text-title1 my-20 ">ALL Translations.</div>
      <CardList<Translation>
        items={allTranslations}
        render={translation => (
          <Card
            key={translation.slug}
            href={`translations/${translation.skill}/${translation.slug}`}
            title={translation.slug}
            date={translation.date}
          />
        )}
      />
    </div>
  );
}
