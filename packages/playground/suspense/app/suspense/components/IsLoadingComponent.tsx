'use client';
import { MOCK_DATA_API_URL } from '@guesung/constants';
import { useQuery } from '@tanstack/react-query';

export default function IsLoadingComponent() {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(MOCK_DATA_API_URL);
      return response.json();
    },
    queryKey: ['data'],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div></div>;
}
