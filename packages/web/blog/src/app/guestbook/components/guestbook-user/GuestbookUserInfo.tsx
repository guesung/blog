import { Button } from '@guesung/ui';
import { signOut } from '@utils';
import { Session } from 'next-auth';
import Image from 'next/image';

interface GuestbookUserInfoProps {
  session: Session;
}
export default function GuestbookUserInfo({
  session: { user },
}: GuestbookUserInfoProps) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-8pxr">
        {user?.image && (
          <Image
            src={user?.image}
            alt="프로필 이미지"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        {<p>{user?.name}</p>}
      </div>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button type="submit">로그아웃</Button>
      </form>
    </div>
  );
}
