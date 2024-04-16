import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import router from "./routes";
import App from "./App";
import AuthContext from "./context/MyContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthContext>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
