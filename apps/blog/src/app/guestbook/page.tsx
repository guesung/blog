import { ContentLayout } from '@components';
import { Metadata } from 'next';
import { GuestbookList, GuestbookLogin, GuestbookMessage } from './components';
import { Spacing } from '@guesung/ui';
import { auth } from '@utils';
import GuestbookUserInfo from './components/GuestbookUserInfo';
import { Session } from 'next-auth';

export const metadata: Metadata = {
  title: 'Guestbook.',
  description: 'Guestbook',
};

export default async function page() {
  const session = (await auth()) as Session;

  return (
    <ContentLayout className="flex flex-col gap-20">
      <ContentLayout.Title>Guestbook</ContentLayout.Title>
      <ContentLayout.Description>
        아무 이야기나 써주세요! 블로그 피드백이나 잡담도 상관없습니다
      </ContentLayout.Description>
      <div className="text-subtitle2">Guestbook 로그인</div>
      <div>
        이메일은 노출되지 않습니다! 닉네임과 프로필 사진만 노출됩니다 😀
      </div>
      <Spacing size={20} />
      {session ? <GuestbookUserInfo session={session} /> : <GuestbookLogin />}
      <GuestbookList />
      <Spacing size={20} />
    </ContentLayout>
  );
}
