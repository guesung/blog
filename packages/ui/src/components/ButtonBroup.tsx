import { StrictPropsWithChildren } from '@guesung/constants';

interface ButtonBroupProps extends StrictPropsWithChildren {}

export default function ButtonBroup({ children }: ButtonBroupProps) {
  return <div className="flex gap-10">{children}</div>;
}
