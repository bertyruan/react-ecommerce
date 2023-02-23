import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { logger } from "redux-logger";

import { rootReducer } from "./root-reducer";

const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log(store.getState());
  console.log(action);

  next(action);
  console.log(store.getState());
};

// logs actions and subsequent state.
const middleWares = [customLogger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
