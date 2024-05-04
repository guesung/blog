import { MDX } from 'contentlayer/core';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PostContentProps {
  body: MDX;
}
export default function PostContent({ body }: PostContentProps) {
  const MDXContent = useMDXComponent(body.code);

  return (
    <div className="prose">
      <MDXContent />;
    </div>
  );
}
