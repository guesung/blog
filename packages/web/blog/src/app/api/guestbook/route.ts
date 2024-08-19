import { auth, getSupabaseClient } from '@utils';

export async function GET() {
  const supabase = getSupabaseClient('guestbook');
  const response = await supabase.from('guestbook').select();
  return Response.json(response);
}

export async function POST(request: Request) {
  const supabase = getSupabaseClient('guestbook');
  const body = await request.json();

  console.log(body);
  const session = await auth();
  if (!session || !session.user) return Response.redirect('/guestbook');

  const {
    user: { email, image, name },
  } = session;

  const response = await supabase.from('guestbook').insert({
    email,
    image,
    name,
    message: body.message,
    id: new Date(),
  });
  console.log(response);
  return Response.json({ response });
}
