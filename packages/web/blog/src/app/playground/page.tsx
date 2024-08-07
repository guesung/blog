import { Layout } from '@components';
import { Button, ButtonBroup, Circle, Move } from '@guesung/ui';
import Link from 'next/link';
import { DragAndDrop, Visibility } from './components';

interface PagemProps {
  searchParams: {
    mode?: string;
  };
}

export default function page({ searchParams }: PagemProps) {
  const mode = searchParams?.mode;

  return (
    <Layout>
      <Layout.Title>Playground</Layout.Title>
      <Layout.Description>
        This page is for testing new features.
      </Layout.Description>
      <ButtonBroup>
        <Link href="?mode=dnd">
          <Button>Drag And Drop</Button>
        </Link>
        <Link href="?mode=framer-motion">
          <Button>Framer Motion</Button>
        </Link>
      </ButtonBroup>
      {mode === 'dnd' && <DragAndDrop />}
      {mode === 'framer-motion' && (
        <>
          <Visibility />
          <Move>
            <Circle />
          </Move>
        </>
      )}
    </Layout>
  );
}
