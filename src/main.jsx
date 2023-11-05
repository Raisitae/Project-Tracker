import "./resetcss.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProviderTimer } from "./context/TimerContext.jsx";
import { ProviderProject } from "./context/ProjectContext.jsx";
import { ProviderUser } from "./context/UserContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProviderUser>
        <ProviderTimer>
          <ProviderProject>
            <App />
          </ProviderProject>
        </ProviderTimer>
      </ProviderUser>
    </ChakraProvider>
  </React.StrictMode>
);
