import { Content } from '@contents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Callout, PostStatusBar, Translation, Description } from '@components';
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';
import { cn, formatDate } from '@guesung/utils';
import { ClassNameType } from '@guesung/constants';

interface PostProps extends Content, ClassNameType {}

export default function ContentPost({
  title,
  body,
  date,
  className,
  _raw,
}: PostProps) {
  if (!body) return notFound();

  const MDXContent = useMDXComponent(body.code);

  return (
    <div className={cn('mx-auto flex flex-col gap-20 px-20', className)}>
      <PostStatusBar />
      <div className="text-center">{formatDate(date)}</div>
      <div className="text-title3 text-center">{title}</div>
      <div className="prose max-w-full">
        <MDXContent
          components={{
            Callout,
            Translation,
            Description,
            Image: ({
              width,
              height,
              src,
              className,
              ...props
            }: ImageProps) => (
              <Image
                {...props}
                width={width ?? 600}
                height={height ?? 600}
                src={`/contents/${_raw.sourceFileDir}/${src}`}
                className={className}
              />
            ),
          }}
        />
      </div>
    </div>
  );
}
