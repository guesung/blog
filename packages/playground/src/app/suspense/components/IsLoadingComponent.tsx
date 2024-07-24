'use client';
import { MOCK_SERVER_URL } from '@guesung/constants';
import { useQuery } from '@tanstack/react-query';

export default function IsLoadingComponent() {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(MOCK_SERVER_URL);
      return response.json();
    },
    queryKey: ['data'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div></div>;
}
