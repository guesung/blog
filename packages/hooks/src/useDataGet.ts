import { useEffect, useState } from 'react';
import { useError } from '.';
import { StatusType } from './useDataGet.type';

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
  const { error, setError } = useError();
  const [data, setData] = useState<T[]>(initialData);
  const [status, setStatus] = useState<StatusType>('idle');

  useEffect(() => {
    (async function dataGet() {
      try {
        setStatus('loading');
        const response = await fn();
        setData(response);
        setStatus('success');
        onSuccess && onSuccess();
      } catch (error) {
        setError(error);
        setStatus('error');
        onError && onError();
      }
    })();
  }, [trigger, setError]);

  return { data, status };
}
