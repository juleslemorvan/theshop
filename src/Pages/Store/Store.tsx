import { useContext, useEffect } from "react";
import { getAllProducts } from "../../api";
import CardItem from "../../Components/CardItem/CardItem";
import { Flex, Heading } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { CardItemActions } from "../../Components/CardItemActions/CardItemActions";
import { useProductCount } from "../../hooks/useProductCount";



const Store = () => {
  const { setCart, cart } = useContext(CartContext);
  const { setProducts, products } = useContext(ProductContext);
  const { onDecrement, onIncrement, onRemove } = useProductCount();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromApi = await getAllProducts();
      setProducts(productsFromApi.products);
    };

    fetchProducts();
  }, [setProducts]);

  const handleAddToCart = (productId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: 1,
    }));
  };

  return (
    <Flex
      direction="column"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize={35} mb={10}>
        Welcome Store
      </Heading>
      <Flex gap={2} flexWrap="wrap" justifyContent="center">
        {products.map(
          ({ title, description, thumbnail, category, price, rating, id }) => (
            <CardItem
              image={thumbnail}
              title={title}
              description={description}
              category={category}
              price={price}
              rate={rating}
              key={id}
            >
              <CardItemActions
                count={cart[id]}
                onAddToCart={() => handleAddToCart(id)}
                onIncrement={() => onIncrement(id)}
                onDecrement={() => onDecrement(id)}
                onRemove={() => onRemove(id)}
              />
            </CardItem>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default Store;
