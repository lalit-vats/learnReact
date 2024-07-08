import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LalitorReact from "./lalit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <LalitorReact />
  </React.StrictMode>
);
