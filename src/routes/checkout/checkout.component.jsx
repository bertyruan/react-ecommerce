import { useSelector } from "react-redux";
import CartRow from "../../components/cart-row/cart-row.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./checkout.styles.scss";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>

        {cart.length
          ? cart.map((c) => <CartRow key={c.id} item={c}></CartRow>)
          : "No items in cart"}

        <div className="total">Total: ${total}</div>
      </div>
    </>
  );
};

export default Checkout;
