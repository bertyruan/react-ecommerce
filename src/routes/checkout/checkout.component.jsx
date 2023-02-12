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
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((c) => (
            <CartRow key={c.id} item={c}></CartRow>
          ))}
        </tbody>
      </table>
      <div>Total: ${getTotal()}</div>
    </>
  );
};

export default Checkout;
