export type GuestbookType = {
  id:string;
  created_at:string;
  name:string;
  message:string;
}
export interface GuestbookResponse {
  guestbookList : GuestbookType[];
}