export const selectCategories = (state) => {
  console.log("categories select fired");
  return state.categories.categories.reduce((prev, curr) => {
    const { title, items } = curr;

    prev[title.toLowerCase()] = items;
    return prev;
  }, {});
};
