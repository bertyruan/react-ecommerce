import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((prev, curr) => {
      const { title, items } = curr;

      prev[title.toLowerCase()] = items;
      return prev;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// export const selectCategoriesMap = (state) => {
//   console.log("categories select fired");
//   return state.categories.categories.reduce((prev, curr) => {
//     const { title, items } = curr;

//     prev[title.toLowerCase()] = items;
//     return prev;
//   }, {});
// };
