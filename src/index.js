import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
let render = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

render(store.getState());
store.subscribe(() => {
  let state = store.getState();
  render(state);
});

reportWebVitals();
