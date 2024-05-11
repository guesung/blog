import { MDX } from 'contentlayer/core';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Callout, Translation } from '@components';

interface PostContentProps {
  body: MDX;
}
export default function PostContent({ body }: PostContentProps) {
  const MDXContent = useMDXComponent(body.code);

  return (
    <div className="prose max-w-full">
      <MDXContent components={{ Callout, Translation }} />
    </div>
  );
}