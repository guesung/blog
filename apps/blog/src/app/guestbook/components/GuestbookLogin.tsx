'use client';

import { LoginButton, LoginButtonProps } from '@components';
import KakaoIcon from '@images/icons/kakao.svg';
import NaverIcon from '@images/icons/naver.svg';

const loginButtonList: LoginButtonProps[] = [
  {
    text: '네이버 로그인',
    provider: 'naver',
    icon: NaverIcon,
    buttonClassName: 'bg-[#2db400] text-white',
    iconClassName: 'fill-current text-white',
  },
  {
    text: '카카오 로그인',
    provider: 'kakao',
    icon: KakaoIcon,
    buttonClassName: 'bg-[#fee500] text-[#191919]',
    iconClassName: 'fill-current text-black/90',
  },
];

export default function GuestbookLogin() {
  return (
    <div className="grid grid-cols-2 gap-x-20 gap-y-12">
      {loginButtonList.map(loginButton => (
        <LoginButton {...loginButton} />
      ))}
    </div>
  );
}
