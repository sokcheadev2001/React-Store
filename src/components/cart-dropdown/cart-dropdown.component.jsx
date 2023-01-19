import Button from "../button/button.component";
import CartItem from "../cat-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./card-dropdown.scss";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
