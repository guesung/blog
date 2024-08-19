import { Layout } from '@components';
import { Spacing } from '@guesung/ui';
import { auth } from '@utils';
import { Metadata } from 'next';
import { Session } from 'next-auth';
import {
  GuestbookForm,
  GuestbookLogin,
  GuestbookMessageList,
  GuestbookUserInfo,
} from './components';

export const metadata: Metadata = {
  title: 'Guestbook.',
  description: 'Guestbook',
};

export default async function page() {
  const session = (await auth()) as Session;

  return (
    <Layout>
      <Layout.Title>Guestbook</Layout.Title>
      <Layout.Description>
        아무 이야기나 써주세요! 블로그 피드백이나 잡담도 상관없습니다
      </Layout.Description>
      <Layout.Title className="text-body1">Guestbook 로그인</Layout.Title>
      <div>
        이메일은 노출되지 않습니다! 닉네임과 프로필 사진만 노출됩니다 😀
      </div>
      <div className="flex flex-col gap-20">
        {session ? <GuestbookUserInfo session={session} /> : <GuestbookLogin />}
        {session ? <GuestbookForm /> : null}
        <GuestbookMessageList />
      </div>
    </Layout>
  );
}
