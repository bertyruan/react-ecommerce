import { BagIcon, CartIconContainer, ItemCount } from "./shop-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setCartIsOpen } from "../../store/cart/cart.reducer";

const ShopIcon = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(selectIsCartOpen);
  const count = useSelector(selectCartCount);

  const toggleDropdown = () => {
    dispatch(setCartIsOpen(!cartIsOpen));
  };

  return (
    <CartIconContainer onClick={toggleDropdown}>
      <BagIcon className="shopping-icon" />
      <ItemCount className="item-count">{count}</ItemCount>
    </CartIconContainer>
  );
};

export default ShopIcon;
