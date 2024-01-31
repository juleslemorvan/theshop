import {
  Button,
  Flex,
  Link,
  IconButton,
  Box,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { GrLogout } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartProduct from "../cartProduct/CartProduct";

const CartIcon = ({ count }: { count: number }) => {
  return (
    <Box position="relative">
      <AiOutlineShoppingCart size={22} />
      {count > 0 && (
        <Box
          position="absolute"
          borderRadius="50%"
          backgroundColor="red"
          boxSize="20px"
          right="-15px"
          top="100%"
        >
          <Text color="white">{count}</Text>
        </Box>
      )}
    </Box>
  );
};


const Navbar = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const productsCount = Object.values(cartContext.cart);
  const total = productsCount.reduce((acc, value) => {
    return acc + value;
  }, 0);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleClose = () => {
    setIsDrawerVisible(false);
  };

  const handleClickCart = () => {
    setIsDrawerVisible(true);
  };

  return (
    <Flex minHeight="100px" backgroundColor="gray.200" marginBottom={5} px={4}>
      <Flex flex={1} />
      <Flex alignItems="center" justifyContent="center" gap={7}>
        <Link fontFamily="Luckiest Guy" href="/" fontSize={20} style={{ textDecoration: "none" }} >
          Store
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>About us</Link>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="end" gap={3}>
        <IconButton
          aria-label="cart"
          icon={<CartIcon count={total} />}
          onClick={handleClickCart}
        />
        <Button
          leftIcon={<GrLogout />}
          onClick={() => userContext.removeUser?.()}
        >
          Logout
        </Button>
      </Flex>
      <Drawer isOpen={isDrawerVisible} onClose={handleClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <CartProduct />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleClose}>
              Continuer ses achats
            </Button>
            <Button colorScheme="blue">Passer au paiement</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
