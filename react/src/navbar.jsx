import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUser, FaShoppingCart } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <Link to="/" className="navbar-brand">MyWebsite</Link>
    </div>
    <div className="navbar-center">
      <Link to="/">Home</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/news">News</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="navbar-right">
      <Link to="/login" className="icon-link"><FaSignInAlt size={20} /></Link>
      <Link to="/profile" className="icon-link"><FaUser size={20} /></Link>
      <Link to="/cart" className="icon-link"><FaShoppingCart size={20} /></Link>
    </div>
  </nav>
);

export default Navbar;
