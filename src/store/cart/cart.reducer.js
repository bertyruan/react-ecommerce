import { CartTypes } from "./cart.type";
import { createSlice } from "@reduxjs/toolkit";

const getProductIndex = (cart, product) =>
  cart.findIndex((item) => item.id === product.id);

const addCartItem = (cart, product) => {
  const newCart = [...cart];
  const productIndex = getProductIndex(newCart, product);
  if (productIndex >= 0) {
    newCart[productIndex].quantity += 1;
  } else {
    newCart.push({ ...product, quantity: 1 });
  }
  return newCart;
};

const removeCartItemCount = (cart, item) => {
  const productIndex = getProductIndex(cart, item);
  if (productIndex >= 0) {
    const newCart = [...cart];
    newCart[productIndex].quantity -= 1;
    return newCart;
  }
  return cart;
};

const removeCartItem = (cart, product) => {
  const productIndex = getProductIndex(cart, product);
  return cart.filter((_, idx) => idx !== productIndex);
};

export const CART_INIT_STATE = {
  cartIsOpen: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INIT_STATE,
  reducers: {
    setCartIsOpen(state, action) {
      state.cartIsOpen = action.payload;
    },
    removeItemCount(state, action) {
      if (action.payload.quantity === 1) return;

      state.items = removeCartItemCount(state.items, action.payload);
    },
    removeItem(state, action) {
      state.items = removeCartItem(state.items, action.payload);
    },
    addItemToCart(state, action) {
      state.items = addCartItem(state.items, action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { setCartIsOpen, removeItemCount, removeItem, addItemToCart } =
  cartSlice.actions;

// export const cartReducer = (state = CART_INIT_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CartTypes.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         cartIsOpen: payload,
//       };
//     case CartTypes.UPDATE_CART:
//       return {
//         ...state,
//         items: payload,
//       };

//     case CartTypes.NONE:
//     default:
//       return state;
//   }
// };
