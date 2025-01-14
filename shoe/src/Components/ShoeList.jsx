/*eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ShoeList = ({ shoes, postClikedShoe }) => {
  const [eventBox, setEventBox] = useState(true);

  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확인

  const handleShoeClick = (shoe) => {
    //localStorage는 브라우저 전역 객체로, 어느 컴포넌트에서든 접근할 수 있습니다
    const pressedShoes = JSON.parse(localStorage.getItem('pressed')) || [];
    if (!pressedShoes.includes(shoe.id)) {
      pressedShoes.push(shoe.id);
      localStorage.setItem('pressed', JSON.stringify(pressedShoes));
    }
    navigate(`/detail/${shoe.id}`); // 클릭 시 해당 신발 디테일 페이지로 이동
  };

  //2초이내 구입시 할인 이라는 이벤트 박스를 추가한거임. 나머진 다른거 없음
  useEffect(() => {
    const eventTimer = setTimeout(() => setEventBox(false), 2000);
    return () => clearTimeout(eventTimer); // clearTimeout으로 변경
  }, []);

  //누가 이 페이지에 접근하면
  return (
    <div className="shoe-list">
      {/* 이벤트 박스 */}
      {eventBox && <div className="event-box">2초 이내로 구입시 30% 할인!</div>}

      {/* 신발 목록 */}
      {shoes && shoes.length > 0 ? (
        shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="shoe-item"
            onClick={() => handleShoeClick(shoe)}
            style={{ cursor: 'pointer' }}
          >
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

            {/* Detail 버튼 - 내부 클릭 시 이벤트 전파 막기 */}
            <button
              className="detail-button"
              onClick={(e) => {
                navigate(`/detail/${shoe.id}`);
              }}
            >
              View Detail
            </button>
          </div>
        ))
      ) : (
        <div>No shoes available</div>
      )}
    </div>
  );
};

export default ShoeList;
