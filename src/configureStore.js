// import redux
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
// add IndexRoute above and the helpers below
// Import the index reducer and sagas
import IndexReducer from "./index-reducer";
import IndexSagas from "./index-sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  /*eslint-disable */
  const composeSetup =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /*eslint-enable */

  const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)) // allows redux devtools to watch sagas
  );
  // Begin our Index Saga
  sagaMiddleware.run(IndexSagas); 
  console.log("store")

  return store;
 
}
