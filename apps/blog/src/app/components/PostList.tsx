'use client';

import { Post } from '@types';

interface PostListProps {
  postList: Post[];
}

export default function PostList({ postList }: PostListProps) {
  console.log(postList);

  return <div className="grid grid-cols-2 gap-20"></div>;
}
