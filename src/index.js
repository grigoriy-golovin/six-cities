import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App
      places={[
        `Beautiful &amp; luxurious apartment at great location`,
        `apartment at great location`,
        `luxurious apartment`,
        `Beautiful apartment`,
      ]}
    />,
    document.querySelector(`#root`)
);
