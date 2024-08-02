'use client';

import { Button, Input, Spacing } from '@guesung/ui';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export type Session = {
  user: {
    name: string;
    image: string;
  };
};

interface GuestbookMessageProps {
  session: Session;
}
export default function GuestbookMessage({
  session: {
    user: { image, name },
  },
}: GuestbookMessageProps) {
  const handleLogOut = () => {
    signOut();
  };

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
          <Image
            src={image}
            alt="프로필 이미지"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p>{name}</p>
        </div>
        <Button onClick={handleLogOut}>로그아웃</Button>
      </div>
    </div>
  );
}
