import React from 'react';
import './App.css';
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="nav-title">My Blog</h1>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
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
