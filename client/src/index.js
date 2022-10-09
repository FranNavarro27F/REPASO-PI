import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider}from "react-redux";
import store from "./redux/store.js";
import {BrowserRouter} from "react-router-dom";
import "../src/components/css/index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
