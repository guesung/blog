import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: {
    code: string;
    state: string;
  };
}

export default function Page({ searchParams: { code, state } }: PageProps) {
  // redirect('/guestbook');
  return <div>dd</div>;
}
