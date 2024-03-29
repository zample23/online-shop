import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__link">
        <Link to="/">Shop</Link>
      </div>
      <div className="navbar__link">
        <Link to="/cart">
          <ShoppingCart size={40} />
        </Link>
      </div>
    </div>
  );
};
