import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer, ActionCreator} from "./reducer.js";

const init = () => {

  const store = createStore(reducer);
  store.dispatch(ActionCreator.setOffersForCity());
  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
