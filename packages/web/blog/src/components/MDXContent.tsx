import { Content } from '@contents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  Callout,
  PostStatusBar,
  Translation,
  Description,
  CodeBlock,
  Toggle,
} from '@components';
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';
import { cn, formatShowDate } from '@guesung/utils';
import { ClassNameType } from '@guesung/constants';

interface PostProps extends Content, ClassNameType {}

interface CustomImageProps extends ImageProps {
  extension?: string;
}

export default function MDXContent({
  title,
  body,
  date,
  className,
  _raw,
}: PostProps) {
  if (!body) return notFound();

  const MDXContent = useMDXComponent(body.code);

  return (
    <div
      className={cn(
        'max-w-layout mx-auto flex flex-col gap-20 px-20',
        className
      )}
    >
      <PostStatusBar />
      {date && <div className="text-center">{formatShowDate(date)}</div>}
      {title && <div className="text-title3 text-center">{title}</div>}
      <div className="prose max-w-full">
        <MDXContent
          components={{
            Callout,
            Translation,
            Description,
            Toggle,
            Image: ({
              width,
              height,
              src,
              className,
              extension = 'png',
              ...props
            }: CustomImageProps) => (
              <Image
                {...props}
                width={width ?? 600}
                height={height ?? 600}
                src={`/contents/${_raw.sourceFileDir}/${src}.${extension}`}
                className={cn('mx-auto', className)}
              />
            ),
            pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
            a: ({ children, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        />
      </div>
    </div>
  );
}
