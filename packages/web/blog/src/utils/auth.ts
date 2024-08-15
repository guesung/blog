import NextAuth from 'next-auth';
import Kakao from 'next-auth/providers/kakao';
import { SupabaseAdapter } from '@auth/supabase-adapter';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Kakao],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '',
  }),
});
