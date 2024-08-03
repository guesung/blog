'use client';

import { delay } from '@guesung/utils';
import { useEffect, useState } from 'react';

export default function SuspenseWithoutQueryComponent() {
  const [data, setData] = useState('');
  useEffect(() => {
    (async () => {
      const response = await delay(2000);
      setData(response);
    })();
  }, []);

  return <div>{data}</div>;
}
