import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { logger } from "redux-logger";

import { rootReducer } from "./root-reducer";

// logs actions and subsequent state.
const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
