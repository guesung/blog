'use client';

import { cn } from '@guesung/utils';
import { signIn } from 'next-auth/react';

export interface LoginButtonProps {
  text: string;
  provider: 'kakao' | 'naver';
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // TODO: type?
  buttonClassName?: string;
  iconClassName?: string;
}

export default function LoginButton({
  text,
  provider,
  icon: Icon,
  buttonClassName,
  iconClassName,
}: LoginButtonProps) {
  return (
    <button
      className={cn(
        'flex h-48 items-center justify-between rounded-xl px-20 py-8 text-xl',
        buttonClassName
      )}
      onClick={() => signIn(provider)}
    >
      <Icon className={cn('h-20 w-28', iconClassName)} />
      <span className="flex-1 text-center">{text}</span>
    </button>
  );
}
