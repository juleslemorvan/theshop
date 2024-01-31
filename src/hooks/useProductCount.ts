import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useProductCount = () => {
  const { setCart } = useContext(CartContext);

  const onIncrement = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: prevCart[productId] + 1,
    }));
  };

  const onDecrement = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: prevCart[productId] - 1,
    }));
  };

  const onRemove = (productId: number) => {
    setCart((prevCart) => {
      const nextCart = { ...prevCart };
      delete nextCart[productId];
      return nextCart;
    });
  };

  return {
    onIncrement,
    onDecrement,
    onRemove,
  };
};
