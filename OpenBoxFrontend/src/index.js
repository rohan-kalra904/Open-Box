import App from "./App";
import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
