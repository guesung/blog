import { PropsWithChildren } from 'react';

export default function Translation({ children }: PropsWithChildren) {
  return <div className="flex w-full gap-10">{children}</div>;
}

function English({ children }: PropsWithChildren) {
  return <div className="shrink grow basis-0">{children}</div>;
}

function Korean({ children }: PropsWithChildren) {
  return <div className="shrink grow basis-0">{children}</div>;
}

Translation.English = English;
Translation.Korean = Korean;
