import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from './mock/offers.js';

ReactDOM.render(
    <App
      places={offers}
    />,
    document.querySelector(`#root`)
);
