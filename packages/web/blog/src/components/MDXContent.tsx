'use client'
import {
  Callout,
  CodeBlock,
  Description,
  Toggle,
  Translation
} from '@components';
import { Content } from '@contents';
import { ClassNameType } from '@guesung/constants';
import { cn, formatShowDate } from '@guesung/utils';
import { useScroll } from '@hooks';
import { Link, Progress } from '@nextui-org/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image, { ImageProps } from 'next/image';
import { notFound } from 'next/navigation';

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
  const {scrollYPercentage} = useScroll();

  return (
    <div
      className={cn(
        'max-w-layout mx-auto flex flex-col gap-20pxr px-20pxr',
        className
      )}
    >
      <Progress value={scrollYPercentage} className='fixed inset-x-0 top-0 z-50' size='sm'  />
      {date && <div className="text-center">{formatShowDate(date)}</div>}
      {title && <div className="text-center text-title3">{title}</div>}
      <div className="max-w-full prose">
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
            pre: (props) => <CodeBlock {...props} />,
            a: (props) => (
              <Link {...props} isExternal />
            ),
          }}
        />
      </div>
    </div>
  );
}
