import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
  // reducer slice
  user: userReducer,
  categories: categoriesReducer,
});