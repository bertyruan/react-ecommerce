import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import "./cart-row.styles.scss";

const CartRow = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { removeItem, removeItemCount, addItemToCart } =
    useContext(ShoppingCartContext);

  const decrementCartCount = () => {
    removeItemCount(item);
  };
  const removeCartItem = () => {
    removeItem(item);
  };
  const incrementCartCount = () => {
    addItemToCart(item);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={decrementCartCount}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={incrementCartCount}>
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
