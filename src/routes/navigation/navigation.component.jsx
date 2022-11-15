import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const NavigationBar = () => {
  return (
    <>
      <div classNameName="navigation">
        <Link classNameName="nav-link" to="/">
          <div>Logo</div>
        </Link>
        <div classNameName="nav-links-container">
          <Link classNameName="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
