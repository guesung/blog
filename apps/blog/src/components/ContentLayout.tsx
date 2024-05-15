import { PropsWithChildren } from 'react';

interface ContentLayoutProps {}

export default function ContentLayout({
  children,
}: PropsWithChildren<ContentLayoutProps>) {
  return <div className="max-w-800 mx-auto px-16">{children}</div>;
}

interface TitleProps {}

function Title({ children }: PropsWithChildren<TitleProps>) {
  return <div className="text-title3 my-20 text-center">{children}</div>;
}

interface DescriptionProps {}

function Description({ children }: PropsWithChildren<DescriptionProps>) {
  return <div className="text-body2 my-20 text-center">{children}</div>;
}

ContentLayout.Title = Title;
ContentLayout.Description = Description;