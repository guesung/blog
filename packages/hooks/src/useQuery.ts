import { useEffect, useState } from 'react';
import { useError } from '.';

interface useQueryProps<T> {
  initialData: T;
  fetchFn: () => Promise<T>;
  trigger?: unknown;
}

export default function useQuery<T>({
  initialData,
  fetchFn,
  trigger,
}: useQueryProps<T>) {
  const setError = useError();
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    fetchFn()
      .then(response => {
        setData(response);
      })
      .catch(error => {
        setError(error);
      });
  }, [trigger, setError]);

  return { data };
}
