import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="notfound-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
