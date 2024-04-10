import { Footer, Header, PostSection } from './components';

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <PostSection />
      <Footer />
    </main>
  );
}
