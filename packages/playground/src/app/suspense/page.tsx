import { Suspense } from 'react';
import {
  SuspenseWithQueryComponent,
  QueryProvider,
  IsErrorComponent,
  IsLoadingComponent,
  Loading,
} from './components';
import dynamic from 'next/dynamic';

const SuspenseWithoutQueryComponent = dynamic(
  () => import('./components/SuspenseWithoutQueryComponent.tsx'),
  {
    loading: () => <Loading />,
  }
);

export default function Page() {
  return (
    <QueryProvider>
      <IsLoadingComponent />
      <IsErrorComponent />
      <Suspense fallback={<Loading />}>
        <SuspenseWithQueryComponent />
      </Suspense>
      Not Suspense
      <SuspenseWithoutQueryComponent />
    </QueryProvider>
  );
}
