import {
  Callout,
  CodeBlock,
  Description,
  ProgressClient,
  Toggle,
  Translation,
} from '@components';
import { DocumentTypes } from '@contents';
import { ClassNameType } from '@guesung/constants';
import { cn, formatShowDate } from '@guesung/utils';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostProps extends DocumentTypes, ClassNameType {}

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
        'max-w-layout gap-20pxr px-20pxr mx-auto flex flex-col',
        className
      )}
    >
      <ProgressClient />
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
            pre: props => <CodeBlock {...props} />,
            a: props => <Link href={props.href ?? ''} {...props} />,
          }}
        />
      </div>
    </div>
  );
}
