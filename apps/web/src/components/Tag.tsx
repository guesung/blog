import { isServer } from '@guesung/utils';
import { PropsWithChildren } from 'react';

interface TagProps {
  variant: 'outline' | 'filled';
}

export default function Tag({
  variant,
  children,
}: PropsWithChildren<TagProps>) {
  const a = isServer;
  console.log(a);
  return <div>{children}</div>;
}
