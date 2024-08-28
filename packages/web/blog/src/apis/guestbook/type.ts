export type GuestbookType = {
  id: string;
  created_at: string;
  name: string;
  message: string;
  image: string;
  imageFile: string;
};

export interface GuestbookResponse {
  error?: Error;
  data: GuestbookType[];
  count?: number;
  status: number;
  statusText: string;
}

export interface GuesbookRequest {
  message: string;
}
