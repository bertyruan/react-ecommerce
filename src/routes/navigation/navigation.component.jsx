import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import ShopIcon from "../../components/shop-icon/shop-icon.component";
import { UserContext } from "../../context/user.context";
import { userSignOut } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        <CartDropdown></CartDropdown>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
