import { createContext } from "react";
import { Product } from "../api/types";

export type ProductContextProps = {
  products: Product[];
  setProducts: (nextProducts: Product[]) => void;
};

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  setProducts: () => {
    /*  */
  },
});
