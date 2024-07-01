import { setGoogleSpreadSheet } from '@utils';

export async function POST(request: Request) {
  const requestData = await request.json();
  const res = await setGoogleSpreadSheet(requestData);

  return new Response(JSON.stringify(res), {
    headers: { 'Content-Type': 'application/json' },
  });
}
