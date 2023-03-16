import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "../navigation/navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

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
           {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
