import { ANON_KEY, SUPABASE_URL } from "@constants";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(SUPABASE_URL, ANON_KEY, {
    db: { schema: 'guestbook' },
  });
  const response = await supabase.from('guestbook').select();
  return Response.json( response );
}

// export async function POST(request: Request) {
//   const res = await request.json()
//   return Response.json({ res })
// }