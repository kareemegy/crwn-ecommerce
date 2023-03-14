import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "../navigation/navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <CrownLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
        <Outlet />
    </>
  );
};

export default Navigation;
