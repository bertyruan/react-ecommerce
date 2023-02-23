import { CATEGORIES_REDUCER_TYPES } from "./categories.type";

export const CATEGORIES_INIT_STATE = {
  categories: [],
};

export const categoriesReducer = (state = CATEGORIES_INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_REDUCER_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
