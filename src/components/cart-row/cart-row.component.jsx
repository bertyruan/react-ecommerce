import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import Button from "../button/button.component";
import "./cart-row.styles.scss";

const CartRow = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { removeItem, updateItemCount } = useContext(ShoppingCartContext);
  const removeCartItem = () => {
    removeItem(item);
  };
  const updateCount = (newCount) => {
    updateItemCount(item, newCount);
  };
  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <Button
          buttonType="icon"
          onClick={updateCount.bind(this, quantity - 1)}
        >
          {"<"}
        </Button>
        {quantity}
        <Button
          buttonType="icon"
          onClick={updateCount.bind(this, quantity + 1)}
        >
          {">"}
        </Button>
      </td>
      <td>{price}</td>
      <td>
        <Button buttonType="icon" onClick={removeCartItem}>
          X
        </Button>
      </td>
    </tr>
  );
};

export default CartRow;
