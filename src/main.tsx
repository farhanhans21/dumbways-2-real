import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { costumTheme } from "../src/theme/theme.ts";
import { Provider } from "react-redux";
import { store } from "./features/store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={costumTheme}>
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
