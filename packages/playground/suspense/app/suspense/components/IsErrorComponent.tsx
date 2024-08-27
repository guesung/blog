'use client';
import { MOCK_DATA_API_URL } from '@guesung/constants';
import { useQuery } from '@tanstack/react-query';

export default function IsErrorComponent() {
  const { data, isError } = useQuery({
    queryFn: async () => {
      const response = await fetch(MOCK_DATA_API_URL);
      return response.json();
    },
    queryKey: ['data'],
  });

  if (isError) {
    return <div>Error</div>;
  }
  return <div></div>;
}
