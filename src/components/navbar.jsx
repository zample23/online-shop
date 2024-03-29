import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
