/*eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ShoeDetail.css';

const ShoeDetail = ({ shoes }) => {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const shoe = shoes.find((item) => item.id === parseInt(id)); // id로 신발 데이터 찾기

  if (!shoe) {
    return <p>신발 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="shoe-detail-page">
      <div className="shoe-detail-card">
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            parseInt(id) + 1
          }.jpg`}
          alt={shoe[id].title}
        />
        <h1>{shoe[id].title}</h1>
        <p>{shoe[id].content}</p>
        <p>Price: {shoe[id].price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default ShoeDetail;
