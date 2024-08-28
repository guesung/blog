import NextAuth from 'next-auth';
import Kakao from 'next-auth/providers/kakao';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL } from '@constants';
import { getSupabaseClient } from './supabase';

const getImageFromImageURL = async (url: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new File([blob], 'avatar.png', { type: 'image/png' });
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Kakao],
  adapter: SupabaseAdapter({
    url: SUPABASE_URL,
    secret: SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    async signIn({ user }) {
      const publicSupabase = getSupabaseClient();
      const nextAuthSupabase = getSupabaseClient('next_auth');

      // if (user.imageFile) return true;

      // 카카오 이미지 URL 로부터 이미지 파일을 가져온다.
      const image = await getImageFromImageURL(user.image);

      // 이미지 파일을 Supabase Storage에 업로드한다.
      const { data: storageImageData, error: stoageImageError } =
        await publicSupabase.storage
          .from('avatar')
          .upload(`${user.id}.png`, image);

      // Supabase Storage에 업로드한 이미지를 url로 가져온다.
      const { data: storageImageURL, error: storageImageURLError } =
        await publicSupabase.storage
          .from('avatar')
          .createSignedUrl(`${user.id}.png`, 60 * 60 * 24 * 365);

      // 가져온 이미지 URL을 users.imageFile에 업데이트한다.

      if (!storageImageURL) return true;

      const { data, error } = await nextAuthSupabase
        .from('users')
        .update({ imageFile: storageImageURL.signedUrl })
        .eq('id', user.id)
        .select();

      return true;
    },
  },
});
