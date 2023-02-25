import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { userSignOut } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartIsOpen = useSelector(selectIsCartOpen);

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
