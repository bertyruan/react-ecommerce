import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
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
    // a fragment!
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
