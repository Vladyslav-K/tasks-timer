import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import rootSaga from "./sagas"

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
