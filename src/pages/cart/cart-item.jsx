import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img alt={productName} src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p> ${price} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
