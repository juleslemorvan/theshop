import { Flex, Text, Box, Image, Center } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
import { ProductCountSetter } from "../ProductCountSetter/ProductCountSetter";
import { useProductCount } from "../../hooks/useProductCount";

/* 
.map
    [1, 2, 3] => [{}, {}, {}] (conserve la longueur du tableau)
.reduce
    [1, 2, 3] => boolean / string / {} / [] / number (return wtf)
.filter
    [1, 2, 3] => [1, 2] (réduit ou conserve la longueur du tableau)
.includes
    [1, 2, 3].includes(1) => true
    [1, 2, 3].includes(4) => false
    [1, 2, 3].includes('1') => false
    ['1', '2', '3'].includes(1) => false

const a = 1
String(a) => '1'

V1 : filter => products.filter(...) => renvoie seulement les products ajoutés au panier

V2 : map => productIds.map(...) => renvoie la même longueur de tableau avec les produits

const allProductsV2 = productIds.map((productId) => {
    return products.find((product) => String(product.id) === productId);
});

*/

/* 

cart : {
    '123': 3,
    '456': 6
}
// ['123', '456]
product => id = '123'

cart[product.id] === cart['123'] === 3

*/

const CartProduct = () => {
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { onDecrement, onIncrement, onRemove } = useProductCount();

  const productIds = Object.keys(cart);

  const cartProducts = products.filter((product) =>
    productIds.includes(String(product.id))
  );

  return (
    <Flex gap={2} direction="column">
      {cartProducts.map((product) => (
        <Flex key={product.id} alignItems="center" gap={3} justifyContent="space-evenly">
          <Image src={product.thumbnail} boxSize="100px" />
          <Text>{product.title}</Text>
          <ProductCountSetter
            count={cart[product.id]}
            onIncrement={() => onIncrement(product.id)}
            onDecrement={() => onDecrement(product.id)}
            onRemove={() => onRemove(product.id)}
          />
          <Text>{cart[product.id] * product.price} €</Text>
        </Flex>

      ))}
    </Flex>
  );
};

export default CartProduct;
