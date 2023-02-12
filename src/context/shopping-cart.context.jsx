import { useState, createContext } from "react";

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

const updateCartItemCount = (cart, product, count) => {
  const productIndex = getProductIndex(cart, product);
  if (productIndex >= 0) {
    const newCart = [...cart];
    newCart[productIndex].quantity = count;
    return newCart;
  }
  return cart;
};

export const ShoppingCartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cart: [],
  addItemToCart: () => {},
  getCount: () => {},
  removeItem: () => {},
  updateItemCount: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const addItemToCart = (item) => {
    setCart(addCartItem(cart, item));
  };
  const getCount = () => {
    return cart.reduce((prev, curr) => curr.quantity + prev, 0);
  };

  const removeItem = (product) => {
    setCart(removeCartItem(cart, product));
  };

  const updateItemCount = (product, count) => {
    if (count < 1) {
      return;
    }
    setCart(updateCartItemCount(cart, product, count));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cart,
    addItemToCart,
    getCount,
    removeItem,
    updateItemCount,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
