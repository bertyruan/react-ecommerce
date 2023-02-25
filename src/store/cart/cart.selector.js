import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.items
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.cartIsOpen
);

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price;
  }, 0)
);
