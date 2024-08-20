'use client';

import type {
  EmailInputType,
  OtherInfoInputType,
  PasswordInputType,
} from '@/context';
import { useFunnel } from '@use-funnel/next';

export default function Component() {
  const funnel = useFunnel<{
    EmailInput: EmailInputType;
    PasswordInput: PasswordInputType;
    OtherInfoInput: OtherInfoInputType;
  }>({
    id: 'my-funnel-app',
    initial: {
      step: 'EmailInput',
      context: {},
    },
  });

  return <div></div>;
}
