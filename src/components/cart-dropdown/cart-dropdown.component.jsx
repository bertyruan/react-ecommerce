import Button from "../button/button.component";

import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cart, setCartIsOpen } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const emptyMessage = <EmptyMessage>Your cart is empty</EmptyMessage>;

  const onCheckout = () => {
    setCartIsOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cart.length
          ? cart.map((item) => <CartItem key={item.id} item={item}></CartItem>)
          : emptyMessage}
      </CartItems>

      <Button onClick={onCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
