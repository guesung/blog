import { auth, getSupabaseClient } from '@utils';

export async function GET() {
  const supabase = getSupabaseClient('guestbook');
  const response = await supabase.from('guestbook').select();
  return Response.json(response);
}

export async function POST(request: Request) {
  const supabase = getSupabaseClient('guestbook');
  const body = await request.json();

  const session = await auth();
  if (!session || !session.user) return Response.redirect('/guestbook');

  const response = await supabase.from('guestbook').insert({
    ...session.user,
    message: body.message,
    id: new Date(),
  });

  return Response.json({ response });
}
