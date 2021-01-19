import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./styles/global.css";
import "./styles/mode.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
