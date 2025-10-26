import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

// import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { StateContextProvider } from "./context";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <PrivyProvider
      appId="cm3yq2w1c023v149svzx9jroe"
      config={{
        appearance: {
          theme: "dark",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        analytics: {
          enabled: false, // Disable analytics to prevent CORS issues
        },
        loginMethods: ["email", "wallet"],
        mfa: {
          noPromptOnMfaRequired: false,
        },
      }}
    >
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </PrivyProvider>
  </ErrorBoundary>
);
