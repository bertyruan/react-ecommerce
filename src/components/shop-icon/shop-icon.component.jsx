import "./shop-icon.styles.scss";

import { ReactComponent as BagSvg } from "../../assets/shopping-bag.svg";

const ShopIcon = () => {
  return (
    <div className="cart-icon-container">
      <BagSvg className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default ShopIcon;
