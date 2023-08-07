import "./resetcss.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProviderTimer } from "./context/TimerContext.jsx";
import { ProviderProject } from "./context/ProjectContext.jsx";
import { ProviderUser } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderUser>
      <ProviderTimer>
        <ProviderProject>
          <App />
        </ProviderProject>
      </ProviderTimer>
    </ProviderUser>
  </React.StrictMode>
);
