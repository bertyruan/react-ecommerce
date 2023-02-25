import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INIT_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INIT_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducer = (state = CATEGORIES_INIT_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_REDUCER_TYPES.SET_CATEGORIES:
//       return {
//         ...state,
//         categories: payload,
//       };
//     default:
//       return state;
//   }
// };
