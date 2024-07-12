import { useQuery } from '@tanstack/react-query';

export default function PageRouter() {
  const data = useQuery({
    queryFn: async () => {
      const res = await fetch(MOCK_SERVER_URL);
      return res.json();
    },
  });
  return <div>dd</div>;
}
