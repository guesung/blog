import { Content } from '@contents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Callout, PostStatusBar, Translation, Description } from '@components';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cn } from '@guesung/utils';
import { ClassNameType } from '@guesung/constants';

interface PostProps extends Content, ClassNameType {}

export default function ContentPost({ title, body, className }: PostProps) {
  if (!body) return notFound();

  const MDXContent = useMDXComponent(body.code);

  return (
    <div className={cn('mx-auto px-20', className)}>
      <PostStatusBar />
      <div className="text-title3 my-50 text-center">{title}</div>
      <div className="prose max-w-full">
        <MDXContent components={{ Callout, Image, Translation, Description }} />
      </div>
    </div>
  );
}
