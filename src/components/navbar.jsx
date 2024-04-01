import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import './navbar.scss';

export const Navbar = () => {
  const { totalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navbar__link">
        <Link to="/">Shop</Link>
      </div>
      <div className="navbar__link">
        <Link to="/cart">
          <ShoppingCart size={40} />
          {/* <span className="navbar__items-counter">{totalCartItems()}</span> */}
        </Link>
      </div>
    </div>
  );
};
