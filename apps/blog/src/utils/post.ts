import { allPosts } from '@contents';
import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';

export const getAllPosts = () =>
  allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

interface GetPost {
  slug: string;
}

export const getPost = ({ slug }: GetPost) => {
  const post = allPosts.find(post => post.slug === slug);
  if (!post) return notFound();
  return post;
};

export const getPostSlugs = () => allPosts.map(post => post._raw.flattenedPath);
