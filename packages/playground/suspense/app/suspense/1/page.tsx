import { Suspense } from 'react';
import {
  SuspenseWithQueryComponent,
  QueryProvider,
  Loading,
} from '../components';

export default function Page() {
  return (
    <QueryProvider>
      Outer Suspense
      <Suspense fallback={<Loading />}>
        <SuspenseWithQueryComponent />
      </Suspense>
    </QueryProvider>
  );
}
