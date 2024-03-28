import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.scss';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Online shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
