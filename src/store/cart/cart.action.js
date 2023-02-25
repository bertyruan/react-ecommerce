import { createAction } from "../../utils/helpers";
import { CartTypes } from "./cart.type";

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

export const setCartIsOpen = (isOpen) =>
  createAction(CartTypes.SET_IS_CART_OPEN, isOpen);

export const removeItemCount = (cart, item) => {
  if (item.quantity === 1) {
    return createAction(CartTypes.NONE);
  }
  const newCartItems = removeCartItemCount(cart, item);
  return createAction(CartTypes.UPDATE_CART, newCartItems);
};

export const removeItem = (cart, item) => {
  const newCartItems = removeCartItem(cart, item);
  return createAction(CartTypes.UPDATE_CART, newCartItems);
};

export const addItemToCart = (cart, item) => {
  const newCartItems = addCartItem(cart, item);
  return createAction(CartTypes.UPDATE_CART, newCartItems);
};
