import { Button, Flex } from "@chakra-ui/react";
import { ProductCountSetter } from "../ProductCountSetter/ProductCountSetter";

export const CardItemActions = ({
  count,
  onAddToCart,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  count: number;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}) => {
  return (
    <Flex gap={10}>
      <Button variant="solid" colorScheme="blue">
        Buy now
      </Button>
      {count > 0 ? (
        <ProductCountSetter
          count={count}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          onRemove={onRemove}
        />
      ) : (
        <Button onClick={onAddToCart} variant="ghost" colorScheme="blue">
          Add to cart
        </Button>
      )}
    </Flex>
  );
};
