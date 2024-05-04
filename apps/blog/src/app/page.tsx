import { getAllPosts } from '@utils';

export default function Page() {
  const postList = getAllPosts();

  return (
    <div>
      {postList.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}
