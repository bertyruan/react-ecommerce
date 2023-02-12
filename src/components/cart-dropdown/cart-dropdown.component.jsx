import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cart, setCartIsOpen } = useContext(ShoppingCartContext);

  const closeDropdown = () => {
    setCartIsOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>

      <Link to="/checkout">
        <Button onClick={closeDropdown}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
