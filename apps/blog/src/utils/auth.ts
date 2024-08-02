import { AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import NextAuth from 'next-auth/next';

const authOptions: AuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NEXTAUTH_NAVER_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_NAVER_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.NEXTAUTH_KAKAO_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_KAKAO_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email }) => {
      console.log(user, account, profile, email);
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const nextAuth = NextAuth(authOptions);