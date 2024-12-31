import { PropsWithChildren } from 'react';

interface ButtonBroupProps extends PropsWithChildren {}

export default function ButtonBroup({ children }: ButtonBroupProps) {
  return <div className="gap-12pxr flex">{children}</div>;
}
