import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    // a fragment!
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo SVG</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
