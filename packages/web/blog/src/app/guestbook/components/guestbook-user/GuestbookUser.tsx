import { Session } from 'next-auth';
import GuestbookUserInfo from './GuestbookUserInfo';
import GuestbookLogin from './GuestbookLogin';
import { Spacing } from '@guesung/ui';
import GuestbookForm from './GuestbookForm';

interface GuestbookUserProps {
  session: Session;
}

export default function GuestbookUser({ session }: GuestbookUserProps) {
  return (
    <section>
      {session ? <GuestbookUserInfo session={session} /> : <GuestbookLogin />}
      <Spacing size={8} />
      {session ? <GuestbookForm /> : null}
    </section>
  );
}
