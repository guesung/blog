import { Button, Card, CardBody, User } from '@nextui-org/react';
import { signOut } from '@utils';
import { Session } from 'next-auth';

interface GuestbookUserInfoProps {
  session: Session;
}
export default function GuestbookUserInfo({
  session: { user },
}: GuestbookUserInfoProps) {
  return (
    <Card>
      <CardBody className="flex-row justify-between">
        {user?.image && (
          <User
            name={user?.name}
            avatarProps={{
              src: user?.image,
            }}
          />
        )}

        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>

        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button type="submit">로그아웃</Button>
        </form>
      </CardBody>
    </Card>
  );
}
