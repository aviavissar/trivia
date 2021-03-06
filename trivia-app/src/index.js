import React from "react";
import ReactDOM from "react-dom";
import "./App_styles.scss";
import * as serviceWorker from "./serviceWorker";
import AppRouter, { history } from "./router/AppRouter";
const loader = document.querySelector(".loader");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <AppRouter history={history} hideLoader={hideLoader} />
      </React.StrictMode>,
      document.getElementById("root")
    ),
  0
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
