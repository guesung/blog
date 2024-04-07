import { useEffect, useState } from 'react';
import { useError } from '.';

interface useDataGetProps<T> {
  fn: () => Promise<T[]>;
  initialData?: T[];
  trigger?: unknown;
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useDataGet<T>({
  fn,
  initialData = [],
  trigger,
  onSuccess,
  onError,
}: useDataGetProps<T>) {
  const setError = useError();
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    (async function dataGet() {
      try {
        const response = await fn();
        setData(response);
        onSuccess && onSuccess();
      } catch (error) {
        setError(error);
        onError && onError();
      }
    })();
  }, [trigger, setError]);

  return { data };
}
