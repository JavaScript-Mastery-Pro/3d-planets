import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { AllProvider } from "./context/All.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllProvider>
  </React.StrictMode>
);
