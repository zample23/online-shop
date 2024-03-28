import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { PRODUCTS } from '../../products';
import './cart.css';

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};
