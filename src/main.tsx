import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.css";
import { theme } from "./style/theme/theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
