import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CounterList from "./components/counterList";
import AddCounter from "./components/AddCounter";
import { Provider } from "react-redux";
import store from "./store/reducers";

let container = (
  <div>
    <Provider store={store}>
      <CounterList />
      <AddCounter />
    </Provider>
  </div>
);

ReactDOM.render(container, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
