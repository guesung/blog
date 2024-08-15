import NextAuth from 'next-auth';
import Kakao from 'next-auth/providers/kakao';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from '@constants';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Kakao],
  adapter: SupabaseAdapter({
    url: SUPABASE_URL,
    secret:SUPABASE_SERVICE_ROLE_KEY,
  }),
});
