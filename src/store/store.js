import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// logs actions and subsequent state.
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const componseEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composeEnhancers = componseEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(middleWares),
});

// export const persistor = persistStore(store);

// const customLogger = (store) => (next) => (action) => {
//   console.log(action);
//   if (!action.type) {
//     return next(action);
//   }

//   console.log(store.getState());
//   console.log(action);

//   next(action);
//   console.log(store.getState());
// };
