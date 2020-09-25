import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/store";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  // <Provider store={store}>
  //   <React.StrictMode>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </React.StrictMode>
  // </Provider>,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
