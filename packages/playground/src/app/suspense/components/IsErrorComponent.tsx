'use client';
import { MOCK_SERVER_URL } from '@guesung/constants';
import { useQuery } from '@tanstack/react-query';

export default function IsLoadingComponent() {
  const { data, isError } = useQuery({
    queryFn: async () => {
      const response = await fetch(MOCK_SERVER_URL);
      return response.json();
    },
    queryKey: ['data'],
  });

  if (isError) {
    return <div>Error</div>;
  }
  return <div></div>;
}
