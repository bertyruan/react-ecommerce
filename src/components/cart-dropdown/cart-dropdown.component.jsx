import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cart, setCartIsOpen } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const onCheckout = () => {
    setCartIsOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>

      <Button onClick={onCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
