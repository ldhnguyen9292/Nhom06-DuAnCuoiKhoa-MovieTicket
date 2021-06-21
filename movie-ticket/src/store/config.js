import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { RootReducer } from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  RootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(ReduxThunk))
);
