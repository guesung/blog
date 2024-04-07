import { useEffect, useState } from 'react';
import { useError } from '.';

interface useDataGetProps<T> {
  fetchFn: () => Promise<T[]>;
  initialData?: T[];
  trigger?: unknown;
}

export default function useDataGet<T>({
  fetchFn,
  initialData = [],
  trigger,
}: useDataGetProps<T>) {
  const setError = useError();
  const [data, setData] = useState<T[]>(initialData);

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
