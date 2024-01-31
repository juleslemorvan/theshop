import {
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  IconButton,
  Flex,
  NumberInputStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export const ProductCountSetter = ({
  count,
  onIncrement,
  onDecrement,
  onRemove,
}: {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}) => {
  const handleDecrement = () => {
    if (count === 1) {
      onRemove();
    } else {
      onDecrement();
    }
  };

  return (
    <Flex gap={2}>
      <NumberInput defaultValue={0} width="80px" value={count}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={onIncrement} />
          <NumberDecrementStepper onClick={handleDecrement} />
        </NumberInputStepper>
      </NumberInput>
      <IconButton
        aria-label="remove"
        onClick={onRemove}
        icon={<FaTrash fontSize="1.25rem" />}
      />
    </Flex>
  );
};
