'use client';
import { delay } from '@guesung/utils';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function SuspenseWithQueryComponent() {
  const { data } = useSuspenseQuery({
    queryFn: async () => {
      return await delay(1000);
    },
    queryKey: ['data'],
  });

  return <div>{data}</div>;
}
