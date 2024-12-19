/*eslint-disable */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Style/ShoeList.css';

const ShoeList = ({ shoes }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확인

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe-item">
          <img
            className="shoe-image"
            src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`}
            alt={shoe.title}
          />
          <h4 className="shoe-title">{shoe.title}</h4>
          <p className="shoe-content">{shoe.content}</p>
          <p className="shoe-price">{shoe.price.toLocaleString()}원</p>

          {/* View Detail 버튼: /detail 경로에서만 보이도록 */}
          {(location.pathname === '/detail' ||
            location.pathname.startsWith('/detail/')) && (
            <button
              className="detail-button"
              onClick={() => navigate(`/detail/${shoe.id}`)}
            >
              View Detail
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
