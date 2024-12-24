/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ShoeList = ({ shoes }) => {
  let [eventBox, setEventBox] = useState(true);

  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확인

  useEffect(() => {
    const eventTimer = setTimeout(() => setEventBox(false), 2000);
    return () => clearTimeout(eventTimer); // clearTimeout으로 변경
  }, []);

  return (
    <div className="shoe-list">
      {/* 이벤트 박스 */}
      {eventBox && <div className="event-box">2초 이내로 구입시 30% 할인!</div>}

      {/* 신발 목록 */}
      {shoes && shoes.length > 0 ? (
        shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img
              className="shoe-image"
              src={`https://codingapple1.github.io/shop/shoes${
                shoe.id + 1
              }.jpg`}
              alt={shoe.title}
            />
            <h4 className="shoe-title">{shoe.title}</h4>
            <p className="shoe-content">{shoe.content}</p>
            <p className="shoe-price">{shoe.price.toLocaleString()}원</p>

            {/* Detail 버튼 */}
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
        ))
      ) : (
        <div>No shoes available</div>
      )}
    </div>
  );
};

export default ShoeList;
