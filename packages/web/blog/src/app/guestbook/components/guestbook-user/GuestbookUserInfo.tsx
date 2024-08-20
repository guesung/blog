import { Avatar, Button } from '@nextui-org/react';
import { signOut } from '@utils';
import { Session } from 'next-auth';

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
          <Avatar
            src={user?.image}
            alt="프로필 이미지"
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
