import { BagIcon, CartIconContainer, ItemCount } from "./shop-icon.styles.jsx";

import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const ShopIcon = () => {
  const { cartIsOpen, setCartIsOpen, count } = useContext(ShoppingCartContext);

  const toggleDropdown = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <BagIcon className="shopping-icon" />
      <ItemCount className="item-count">{count}</ItemCount>
    </CartIconContainer>
  );
};

export default ShopIcon;
