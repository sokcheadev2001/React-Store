import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./card-icon.style.scss";

const CartIcon = () => {
  const { isCartShow, setIsCartShow } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartShow(!isCartShow);
  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
