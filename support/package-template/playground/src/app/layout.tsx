import type { Metadata } from 'next';
import './styles.css'

export const metadata: Metadata = {
  title: 'Project',
  description: 'Project입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
