import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img alt={productName} src={productImage} />
      </div>
      <div className="cartItem__description">
        <p className="cartItem__name">{productName}</p>
        <p className="cartItem__price"> ${price} </p>
        <div className="cartItem__countHandler">
          <button
            className="cartItem__button"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <span className="cartItem__amount">{cartItemAmount}</span>
          <button className="cartItem__button" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
