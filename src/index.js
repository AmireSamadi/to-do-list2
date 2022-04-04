import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./Containers/App";
import GlobalState from "./Containers/GlobalState";

render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>,
  document.getElementById("root")
);
