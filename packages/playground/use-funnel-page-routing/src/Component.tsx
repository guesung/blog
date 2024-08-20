'use client';

import { useFunnel } from '@use-funnel/next';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';
import OtherInfoInput from './components/OtherInfoInput';
import {
  EmailInputType,
  OtherInfoInputType,
  PasswordInputType,
} from './context';

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

  switch (funnel.step) {
    case 'EmailInput':
      return (
        <EmailInput
          onNext={email => funnel.history.push('PasswordInput', { email })}
        />
      );
    case 'PasswordInput':
      return (
        <PasswordInput
          email={funnel.context.email}
          onNext={password =>
            funnel.history.push('OtherInfoInput', {
              ...funnel.context,
              password,
            })
          }
        />
      );
    case 'OtherInfoInput':
      return (
        <OtherInfoInput
          onNext={other =>
            funnel.history.push('Finish', { ...funnel.context, other })
          }
        />
      );
  }

  return <div></div>;
}
