'use client';

import { createClient } from '@supabase/supabase-js';

import { Button, Input, Spacing } from '@guesung/ui';
import { FormEventHandler } from 'react';
import { ANON_KEY, SUPABASE_URL } from '@constants';

export default function GuestbookMessage() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const supabase = createClient(
      SUPABASE_URL,
      ANON_KEY
    );
    console.log(supabase);
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
