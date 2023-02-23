import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { userSignOut } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { cartIsOpen } = useContext(ShoppingCartContext);

  const authButton = currentUser ? (
    <span className="nav-link" onClick={userSignOut}>
      Sign Out
    </span>
  ) : (
    <Link className="nav-link" to="/auth">
      Sign In
    </Link>
  );
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {authButton}
          <ShopIcon></ShopIcon>
        </div>
        {cartIsOpen && <CartDropdown></CartDropdown>}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
