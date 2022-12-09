import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra-ui/theme";
import App from "./App";
import { AppProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
);
