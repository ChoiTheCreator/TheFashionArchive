import React from 'react';

import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">Shoes</h1>
          <ul className="nav-links">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/detail'}>Details</Link>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
