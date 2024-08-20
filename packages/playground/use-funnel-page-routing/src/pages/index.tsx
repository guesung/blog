import Image from 'next/image';
import { Inter } from 'next/font/google';
import Component from '@/Component';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Component />
    </main>
  );
}
