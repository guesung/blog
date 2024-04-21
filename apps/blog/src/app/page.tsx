import { Footer, Header } from '@components';
import { PostSection } from './components';
import { Card } from '@guesung/ui';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <PostSection />
      <Footer />
      <Card>aaa</Card>
    </main>
  );
}
