import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="cartItem">
      <img alt={productName} src={productImage} />
      <div className="cartItem__description">
        <p>
          <b> {productName} </b>
        </p>
        <p> ${price} </p>
        <div className="cartItem__countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          {/* <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          /> */}
          <span>{cartItemAmount}</span>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
