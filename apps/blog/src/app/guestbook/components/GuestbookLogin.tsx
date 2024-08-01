'use client';

import NaverIcon from '@images/icons/naver.svg';
import KakaoIcon from '@images/icons/kakao.svg';
import { cn } from '@guesung/utils';

const iconMap = [
  {
    icon: NaverIcon,
    iconStyle: 'fill-current text-white',
    style: 'bg-[#2db400] text-white',
    text: '네이버 로그인',
  },
  {
    icon: KakaoIcon,
    iconStyle: 'fill-current text-black/90',
    style: 'bg-[#fee500] text-[#191919]',
    text: '카카오 로그인',
  },
  //  {
  //   icon: SiGithub,
  //   iconStyle: 'fill-current text-white bg-[#24292f] !h-7',
  //   style: 'bg-[#24292f] text-white',
  // },
  //  {
  //   icon: FcGoogle,
  //   iconStyle: '!h-7',
  //   style: 'shadow-md text-black/[54%] font-semibold bg-white',
  // },
];

export default function GuestbookLogin() {
  return (
    <div className="grid grid-cols-2 gap-x-20 gap-y-12">
      {iconMap.map(({ icon: Icon, iconStyle, style, text }) => (
        <button
          key={text}
          className={cn(
            'flex h-48 items-center justify-between rounded-xl px-20 py-8 text-xl',
            style
          )}
          // onClick={() => onLogin(provider)}
        >
          <Icon className={cn('h-20 w-28', iconStyle)} />
          <span className="flex-1 text-center">{text}</span>
        </button>
      ))}
    </div>
  );
}
