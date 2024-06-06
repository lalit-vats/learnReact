import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LalitAurReact from "./lalit.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blenk">
    visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https:/google.com", target: "_blank" },
  "click me to visit google !"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <LalitAurReact />
  </React.StrictMode>
);
