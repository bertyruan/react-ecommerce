import { createContext, useReducer } from "react";

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

const removeCartItem = (cart, product) => {
  const productIndex = getProductIndex(cart, product);
  return cart.filter((_, idx) => idx !== productIndex);
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

export const ShoppingCartTypes = {
  UPDATE_CART: "UPDATE_CART",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const initShoppingCart = {
  cartIsOpen: false,
  cart: [],
  count: 0,
  total: 0,
};

const shoppingCartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ShoppingCartTypes.SET_IS_CART_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };
    case ShoppingCartTypes.UPDATE_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Invalid type ${type} in shoppingCartReducer`);
  }
};

export const ShoppingCartContext = createContext({
  cartIsOpen: false,
  cart: [],
  count: 0,
  total: 0,
  setCartIsOpen: () => {},
  addItemToCart: () => {},
  removeItem: () => {},
  removeItemCount: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [{ cartIsOpen, cart, count, total }, dispatch] = useReducer(
    shoppingCartReducer,
    initShoppingCart
  );

  const updateCartReducer = (newCartItems) => {
    const count = newCartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    const total = newCartItems.reduce((prev, curr) => {
      return prev + curr.quantity * curr.price;
    }, 0);

    dispatch({
      type: ShoppingCartTypes.UPDATE_CART,
      payload: {
        cart: newCartItems,
        count: count,
        total: total,
      },
    });
  };

  const addItemToCart = (item) => {
    const newCartItems = addCartItem(cart, item);
    updateCartReducer(newCartItems);
  };

  const removeItem = (item) => {
    const newCartItems = removeCartItem(cart, item);
    updateCartReducer(newCartItems);
  };

  const removeItemCount = (item) => {
    if (item.quantity === 1) {
      return;
    }
    const newCartItems = removeCartItemCount(cart, item);
    updateCartReducer(newCartItems);
  };

  const setCartIsOpen = (isOpen) => {
    dispatch({ type: ShoppingCartTypes.SET_IS_CART_OPEN, payload: isOpen });
  };

  const value = {
    cartIsOpen,
    cart,
    count,
    total,
    setCartIsOpen,
    addItemToCart,
    removeItem,
    removeItemCount,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
