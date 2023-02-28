import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCollectionAndDocuments } from "../../utils/firebase.utils";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    return await getCollectionAndDocuments();
  }
);

export const CATEGORIES_INIT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INIT_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;

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
