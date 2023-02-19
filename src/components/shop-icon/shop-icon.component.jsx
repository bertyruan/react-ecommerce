import { BagIcon, CartIconContainer, ItemCount } from "./shop-icon.styles.jsx";

import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const ShopIcon = () => {
  const { cartIsOpen, setCartIsOpen, getCount } =
    useContext(ShoppingCartContext);

  const toggleDropdown = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <BagIcon className="shopping-icon" />
      <ItemCount className="item-count">{getCount()}</ItemCount>
    </CartIconContainer>
  );
};

export default ShopIcon;
