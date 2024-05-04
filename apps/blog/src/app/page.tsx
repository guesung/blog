import { PostCard } from '@components';
import { getAllPosts } from '@utils';

export default function Page() {
  const postList = getAllPosts();
  return (
    <div className="mx-auto max-w-1000">
      <div className="text-title1 text-center my-20">ALL POSTS.</div>
      <div className="grid grid-cols-2 justify-items-center">
        {postList.map(post => (
          <PostCard
            id={post._id}
            url={post.url}
            title={post.title}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
}
