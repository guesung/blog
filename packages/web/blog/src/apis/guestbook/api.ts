import { WEB_URL } from '@constants';
import { GuesbookRequest, GuestbookResponse } from './type';

export const getGuestbook = async (): Promise<GuestbookResponse> => {
  const response = await fetch(`${WEB_URL}/api/guestbook`);
  const data = await response.json();

  return data;
};

export const postGuestbook = async (request: GuesbookRequest) => {
  await fetch('/api/guestbook', {
    method: 'POST',
    body: JSON.stringify(request),
  });
};
