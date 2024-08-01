import { AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email }) => {
      console.log(user, account, profile, email);
      return true;
    },
  },
};
