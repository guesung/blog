import { PropsWithChildren } from 'react';

interface ContentLayoutProps {}

export default function ContentLayout({
  children,
}: PropsWithChildren<ContentLayoutProps>) {
  return <div className="max-w-800 mx-auto text-center">{children}</div>;
}
