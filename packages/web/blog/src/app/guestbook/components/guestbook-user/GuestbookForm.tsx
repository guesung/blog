'use client';

import { postGuestbook } from '@apis';
import { Spacing } from '@guesung/ui';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { FormEventHandler, useRef } from 'react';

export default function GuestbookMessage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    if (!inputRef.current) return;

    await postGuestbook({
      message: inputRef.current.value,
    });
  };

  return (
    <Card>
      <CardBody>
      <form onSubmit={handleSubmit}>
        <p>메시지</p>
        <Spacing size={8} />
        <div className="flex justify-between gap-4">
          <Input
            placeholder="여기에 메시지를 입력해주세요"
            className="flex-1"
            ref={inputRef}
          />
          <Button>메시지 등록</Button>
        </div>
      </form>
      </CardBody>
    </Card>
  );
}
