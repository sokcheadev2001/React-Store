import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
