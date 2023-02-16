import { useContext } from "react";
import CartRow from "../../components/cart-row/cart-row.component";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cart } = useContext(ShoppingCartContext);
  const getTotal = () => {
    return cart.reduce((prev, curr) => {
      return prev + curr.quantity * curr.price;
    }, 0);
  };
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

        <div className="total">Total: ${getTotal()}</div>
      </div>
    </>
  );
};

export default Checkout;
