import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {Provider} from "react-redux";
import {reducer, Operation} from "./reducer.js";
import configureAPI from "./api.js";
import {BrowserRouter} from "react-router-dom";

const init = async () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );


 await store.dispatch(Operation.loadOffers());
 await store.dispatch(Operation.checkedIsAuthorization());

 ReactDOM.render(
   <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>,
   document.querySelector(`#root`)
 );
};

init();
