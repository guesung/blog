export const MOCK_SERVER_URL = 'https://dummyjson.com/products';

export interface MOCK_DATA {
  limit: number;
  skip: number;
  total: number;
  products: {
    id: number;
    title: string;
  }[];
}