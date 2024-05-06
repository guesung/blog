import { PostCard } from '@components';
import { getAllPosts } from '@utils';

export default function Page() {
  const postList = getAllPosts();
  return (
    <div className="max-w-1000 mx-auto">
      <div className="text-title1 my-20 text-center">ALL POSTS.</div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
        {postList.map(post => (
          <PostCard url={post.url} title={post.title} date={post.date} />
        ))}
      </div>
    </div>
  );
}
