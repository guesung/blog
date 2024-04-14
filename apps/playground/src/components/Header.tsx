'use client';

import { LinkButton, Spacing } from '@guesung/ui';
import { usePathname } from 'next/navigation';
import { VIEW_PATH_LIST } from '../constants';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <p className="text-title2">MyMoments</p>
      <Spacing size={12} />
      <section className="flex gap-4">
        {VIEW_PATH_LIST.map(viewPathItem => (
          <LinkButton
            key={viewPathItem.path}
            href={viewPathItem.path}
            selected={pathname === viewPathItem.path}
          >
            {viewPathItem.name}
          </LinkButton>
        ))}
      </section>
    </header>
  );
}
