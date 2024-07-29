'use client';
import { type MOCK_DATA, MOCK_SERVER_URL } from '@guesung/constants';
import { delay } from '@guesung/utils';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function SuspenseWithQueryComponent() {
  const { data } = useSuspenseQuery<MOCK_DATA>({
    queryFn: async () => {
      const response = await fetch(MOCK_SERVER_URL);

      await delay(50000);

      return response.json();
    },
    queryKey: ['data'],
  });

  return (
    <div>
      {data.products.map(product => (
        <div>{product.title}</div>
      ))}
    </div>
  );
}
