export interface IProducts {
  title: string;
  id?: number;
  price: number;
  image: string;
  description?: string;
  rating: { rate: number; count: number };
  category?: string;
}
