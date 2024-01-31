import { createContext } from "react";

export type Cart = Record<string, number>;

export type CartContextProps = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

/* Déclaration */
export const CartContext = createContext<CartContextProps>({
  cart: {},
  setCart: () => {
    /*  */
  },
});

/* 
V1

[
    {
        productId: '123',
        count: 12
    },
    {
        productId: '456',
        count: 3  
    }
]


const add = (productId: string) => {
    const previousCarts = cartContext.cart
    const productCartIndex = previousCarts.findIndex(product => product.productId === productId)
    const nextCarts = [...previousCarts.slice(0, productCartIndex), { productId, count:previousCarts[productCartIndex] + 1 }, ...previousCarts.slice(productCartIndex, previousCarts.length)]
    setCarts(nextCarts)
}

<button onClick={() => add('123')}>Produit 123</button>


V2

{
    '123': 12,
    '456': 3,
}


const add = (productId: string) => {
    const previousCarts = cartContext.cart
    setCart({...previousCarts, [productId]: previousCarts[productId] + 1 })
}

<button onClick={() => add('123')}>Produit 123</button>

*/

const myObj = {
  abc: 1,
  def: 2,
};

const keyObj = "abc";

myObj.abc = 3;
myObj[keyObj] = 4;
