import { Button, Input, Spacing } from '@guesung/ui';
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
    <div>
      <p>메시지</p>
      <Spacing size={8} />
      <div className="flex justify-between gap-4">
        <Input placeholder="여기에 메시지를 입력해주세요" className="flex-1" />
        <Button>메시지 등록</Button>
      </div>
      <Spacing size={24} />
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
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
    </div>
  );
}
