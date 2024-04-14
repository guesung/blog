import { Header } from '../../components';

interface ViewLayoutProps {
  children: React.ReactNode;
}

export default function ViewLayout({ children }: ViewLayoutProps) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
