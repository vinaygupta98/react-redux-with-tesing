import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initalState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvarient()))
  );
}
