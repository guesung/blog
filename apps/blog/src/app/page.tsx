import { PostCard } from '@components';
import { allPosts, allTranslations } from '@contents';

export default function Page() {
  return (
    <div className="max-w-1000 mx-auto text-center">
      <div className="text-title1 my-20 ">ALL POSTS.</div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
        {allPosts.map(post => (
          <PostCard slug={post.slug} title={post.title} date={post.date} />
        ))}
      </div>
      <div className="text-title1 my-20 ">ALL Translations.</div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
        {allTranslations.map(translation => (
          <PostCard
            slug={translation.slug}
            title={translation.title}
            date={translation.date}
          />
        ))}
      </div>
    </div>
  );
}
