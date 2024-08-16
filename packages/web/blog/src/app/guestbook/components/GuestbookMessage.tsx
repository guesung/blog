'use client';

import { postGuestbook } from '@apis';
import { Button, Input, Spacing } from '@guesung/ui';
import { Session } from 'next-auth';
import { FormEventHandler } from 'react';

interface GuestbookMessageProps {
  session: Session;
}

export default function GuestbookMessage({ session }: GuestbookMessageProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    await postGuestbook({
      message: '안녕하십니까',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>메시지</p>
      <Spacing size={8} />
      <div className="flex justify-between gap-4">
        <Input placeholder="여기에 메시지를 입력해주세요" className="flex-1" />
        <Button>메시지 등록</Button>
      </div>
      <Spacing size={24} />
    </form>
  );
}
