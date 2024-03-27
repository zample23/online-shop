import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img alt={productName} src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => addToCart(addToCart(id))}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
