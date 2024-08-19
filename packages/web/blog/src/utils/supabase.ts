import { ANON_KEY, SUPABASE_URL } from '@constants';
import { createClient } from '@supabase/supabase-js';

export const getSupabaseClient = (schema = 'public') =>
  createClient(SUPABASE_URL, ANON_KEY, {
    db: { schema },
  });
