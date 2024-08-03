import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guesung Blog',
  description: 'Welcome to Guesung Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <html lang="en">{children}</html>;
}
