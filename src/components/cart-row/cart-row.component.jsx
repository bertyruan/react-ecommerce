import { useDispatch } from "react-redux";
import {
  removeItemCount,
  removeItem,
  addItemToCart,
} from "../../store/cart/cart.reducer";
import "./cart-row.styles.scss";

const CartRow = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const dispatch = useDispatch();

  const decrementCartCount = () => {
    dispatch(removeItemCount(item));
  };
  const removeCartItem = () => {
    dispatch(removeItem(item));
  };
  const incrementCartCount = () => {
    dispatch(addItemToCart(item));
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
