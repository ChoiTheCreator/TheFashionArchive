import React from 'react';

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">My Blog</h1>
          <ul className="nav-links">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
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
