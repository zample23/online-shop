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
          <p>
            <b>Subtotal: ${totalAmount}</b>
          </p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h2>Your Cart is empty</h2>
      )}
    </div>
  );
};
