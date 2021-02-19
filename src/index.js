import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

function tick() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
};

setInterval(tick, 1000);
