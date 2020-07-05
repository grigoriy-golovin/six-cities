import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
// import offers from './mock/offers.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const init = () => {

  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App
      // places={offers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
