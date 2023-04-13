export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: { rate: number; count: number };
  image: string;
  price: number;
};
