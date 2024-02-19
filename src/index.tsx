import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserModalProvider } from "./providers/ModalProvider";
import { AuthProvider } from "providers/AuthProvider";
import { PropertiesProvider } from "providers/PropertiesProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <PropertiesProvider>
        <App />
      </PropertiesProvider>
    </AuthProvider>
  </React.StrictMode>
);
