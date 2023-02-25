import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setCartIsOpen } from "../../store/cart/cart.reducer";

const CartDropdown = () => {
  console.log("render/rerender");
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const emptyMessage = <EmptyMessage>Your cart is empty</EmptyMessage>;

  const onCheckout = () => {
    dispatch(setCartIsOpen(false));
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
