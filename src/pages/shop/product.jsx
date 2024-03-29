import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img className="product__image" alt={productName} src={productImage} />
      <div className="product__description">
        <p className="product__name">{productName}</p>
        <p className="product__price">${price}</p>
      </div>
      <button
        className="product__addToCartBttn"
        onClick={() => addToCart(addToCart(id))}
      >
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
