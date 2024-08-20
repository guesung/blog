import { cn } from '@guesung/utils';
import { signIn } from '@utils';

export interface LoginButtonProps {
  text: string;
  provider: 'kakao' | 'naver';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  buttonClassName: string;
  iconClassName: string;
}

export default function LoginButton({
  text,
  provider,
  icon: Icon,
  buttonClassName,
  iconClassName,
}: LoginButtonProps) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(provider);
      }}
    >
      <button
        className={cn(
          'flex h-48pxr items-center justify-between rounded-xl px-20pxr py-8pxr text-xl',
          buttonClassName
        )}
      >
        <Icon className={cn('h-20 w-28', iconClassName)} />
        <span className="flex-1 text-center">{text}</span>
      </button>
    </form>
  );
}
