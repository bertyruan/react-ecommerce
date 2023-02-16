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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={updateCount.bind(this, quantity - 1)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={updateCount.bind(this, quantity + 1)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CartRow;
