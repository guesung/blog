import { useEffect, useState } from 'react';

export default function useError() {
  const [error, setError] = useState<Error | unknown>();

  useEffect(() => {
    if (!error) return;

    if (error instanceof Error) throw error;
    else throw new Error('알 수 없는 에러가 발생했습니다.');
  }, [error]);

  return { error, setError };
}
