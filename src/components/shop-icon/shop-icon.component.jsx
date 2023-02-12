import "./shop-icon.styles.scss";

import { ReactComponent as BagSvg } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const ShopIcon = () => {
  const { cartIsOpen, setCartIsOpen, getCount } =
    useContext(ShoppingCartContext);

  const toggleDropdown = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <button className="cart-icon-container" onClick={toggleDropdown}>
      <BagSvg className="shopping-icon" />
      <span className="item-count">{getCount()}</span>
    </button>
  );
};

export default ShopIcon;
