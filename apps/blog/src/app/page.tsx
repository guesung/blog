import { PostCard } from '@components';
import { getAllPosts } from '@utils';

export default function Page() {
  const postList = getAllPosts();
  return (
    <div className="max-w-1000 mx-auto">
      <div className="text-title1 my-20 text-center">ALL POSTS.</div>
      <div className="grid h-20 w-1 grid-cols-2 justify-items-center">
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
