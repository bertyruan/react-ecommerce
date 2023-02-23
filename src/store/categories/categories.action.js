import { createAction } from "../../utils/helpers";
import { CATEGORIES_REDUCER_TYPES } from "./categories.type";

export const setCategories = (categories) => {
  return createAction(CATEGORIES_REDUCER_TYPES.SET_CATEGORIES, categories);
};
