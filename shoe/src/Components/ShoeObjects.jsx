/*eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ShoeObject.css';

const ShoeObjects = ({ shoes, idx }) => {
  const navigate = useNavigate();

  return (
    <div className="shoe-detail-container">
      <div className="shoe-card">
        <img
          className="shoe-image"
          src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
          alt={shoes[idx].title}
        />
        <div className="shoe-info">
          <h4 className="shoe-title">{shoes[idx].title}</h4>
          <p className="shoe-description">{shoes[idx].content}</p>
          <p className="shoe-price">{shoes[idx].price.toLocaleString()}원</p>
          {/* Detail 버튼 */}
          <button
            className="detail-button"
            onClick={() => navigate(`/detail/${idx}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeObjects;
