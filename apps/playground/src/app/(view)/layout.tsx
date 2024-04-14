'use server';

import { Header } from '../../components';
interface ViewLayoutProps {
  children: React.ReactNode;
}

export default async function ViewLayout({ children }: ViewLayoutProps) {
  return (
    <div className="p-16">
      <Header />
      {children}
    </div>
  );
}
