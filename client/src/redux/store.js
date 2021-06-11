import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { rootReducer } from "./reducers/reducer";

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(i());

export default store;
