import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Cart, CartContext } from "../../context/CartContext";
import { useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Product } from "../../api/types";

const Layout = () => {
  const [cart, setCart] = useState<Cart>({});
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Flex height="100vh" flex="1 1 0" direction="column">
          <Navbar />
          <Box py={8}>
            <Outlet />
          </Box>
          <Footer />
        </Flex>
      </ProductContext.Provider>
    </CartContext.Provider>
  );
};

export default Layout;
