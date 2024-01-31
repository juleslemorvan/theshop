import { Product } from "./types";

export const getAllProducts = (): Promise<{
  total: number;
  limit: number;
  skip: number;
  products: Product[];
}> => fetch("https://dummyjson.com/products?skip=30").then((res) => res.json());



type Cart<T> = {
  description: string;
  title: string;
  item: T
}


