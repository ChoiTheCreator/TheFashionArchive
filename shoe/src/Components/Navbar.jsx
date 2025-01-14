import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation 올바르게 import
import '../Style/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 페이지 이동 시 애니메이션 트리거
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500); // 애니메이션 지속 시간

    return () => clearTimeout(timer);
  }, [location.pathname]); // 페이지 경로가 변경될 때마다 실행

  return (
    <nav className={`navbar ${isAnimating ? 'animate' : ''}`}>
      <div className="navbar-container">
        <h1 className="nav-title">
          <Link className="nav-title" to="/">
            Collections
          </Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/detail/1">Details</Link>
          </li>
          <li>
            <Link to="/cart">Carts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
