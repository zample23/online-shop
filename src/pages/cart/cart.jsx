import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { PRODUCTS } from '../../products';
import './cart.scss';

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      {/* <div>
        <h1 className="cart__title">Your Cart Items</h1>
      </div> */}
      <div className="cart__cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="cart__checkout">
          <p className="cart__total">
            Total price: <span>${totalAmount}</span>
          </p>
          <div className="cart__buttons">
            <button className="cart__button" onClick={() => navigate('/')}>
              Continue shopping
            </button>
            <button className="cart__button">Checkout</button>
          </div>
        </div>
      ) : (
        <h2 className="cart__empty">Your Cart is empty</h2>
      )}
    </div>
  );
};
